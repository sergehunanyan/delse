<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
                 width="18" height="18">
                <path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/>
            </svg>
        </Link>

        <div class="header_navigation">
            <a href="/ride/" class="active">{lang('transportation.transportation')}</a>
            <a href="/search-ride/">{lang('transportation.search')}</a>
        </div>
    </Block>

    <Block class="m-0">
        <form class="add_form" on:submit|preventDefault={addRide}>
            <div class="ride_from">
                <Input type="text" placeholder="{lang('transportation.from')}:" name="placeFrom" inputId="ride_from"/>
                <input type="hidden" name="longitudeFrom" value="" id="ride_long_from"/>
                <input type="hidden" name="latitudeFrom" value="" id="ride_lat_from"/>
                <Button fill popupOpen=".ride_from_popup" class="open_map">
                    <img src="./static/images/location.svg" alt="Location">
                </Button>
            </div>

            <Popup class="ride_from_popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
                <Page>
                    <Navbar>
                        <NavRight>
                            <Link popupClose>{lang('transportation.close')}</Link>
                        </NavRight>
                    </Navbar>
                    <Block style="height:100%;margin:0;padding:0;">
                        <div id="ride_from_map" style="width: 100%; min-height: 100%;"></div>
                    </Block>
                </Page>
            </Popup>

            <div class="ride_from">
                <Input type="text" placeholder="{lang('transportation.to')}:" name="placeTo" inputId="ride_to"/>
                <input type="hidden" name="longitudeTo" value="" id="ride_long_to"/>
                <input type="hidden" name="latitudeTo" value="" id="ride_lat_to"/>
                <Button fill popupOpen=".ride_to_popup" class="open_map">
                    <img src="./static/images/location.svg" alt="Location">
                </Button>
            </div>

            <Popup class="ride_to_popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
                <Page>
                    <Navbar>
                        <NavRight>
                            <Link popupClose>{lang('transportation.close')}</Link>
                        </NavRight>
                    </Navbar>
                    <Block style="height:100%;margin:0;padding:0;">
                        <div id="ride_to_map" style="width: 100%; min-height: 100%;"></div>
                    </Block>
                </Page>
            </Popup>

            <div class="ride_dates">
                <div>
                    <p>{lang('transportation.can_take')}:</p>
                    <Input type="datepicker" placeholder="dd.mm - dd.mm.yyyy" name="take" readonly calendarParams={{ dateFormat: 'yyyy-mm-dd', rangePicker: true }} />
                </div>
                <div>
                    <p>{lang('transportation.can_deliver')}:</p>
                    <Input type="datepicker" placeholder="dd.mm - dd.mm.yyyy" name="delivery" readonly calendarParams={{ dateFormat: 'yyyy-mm-dd', rangePicker: true }}/>
                </div>
            </div>

            <select name="freightTypeId">
                <option value="0">{lang('transportation.cargo_type')}:</option>
                {#if FreightType != null}
                    {#each FreightType as freight}
                        <option value={freight.id}>{freight.name}</option>
                    {/each}
                {/if}
            </select>

            <select name="serviceTypeId">
                <option value="0">{lang('transportation.transport_type')}:</option>
                {#if ServiceType != null}
                    {#each ServiceType as service}
                        <option value={service.id}>{service.name}</option>
                    {/each}
                {/if}
            </select>

            <div class="add_weight">
                <div class="add_weight_block">
                    <label for="ride_weight">{lang('transportation.weight')}:<Input type="text" id="ride_weight" name="weight"/></label>
                    <select name="weightUnit">
                        <option value="0">{lang('transportation.g')}</option>
                        <option value="1">{lang('transportation.kg')}</option>
                        <option value="2">{lang('transportation.t')}</option>
                    </select>
                </div>

                <div class="add_weight_block">
                    <label for="ride_size">{lang('transportation.volume')}:<Input type="text" id="ride_size" name="volume"/></label>
                    <p>{lang('transportation.m3')}</p>
                </div>
            </div>

            <div class="add_sizes">
                <img src="./static/images/sizes_white.svg" alt="Sizes">

                <div class="add_sizes_middle">
                    <div class="add_sizes_middle_block">
                        <Input type="text" name="length"/>
                        <p>{lang('transportation.length')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text" name="width"/>
                        <p>{lang('transportation.width')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text" name="height"/>
                        <p>{lang('transportation.height')}</p>
                    </div>
                </div>

                <select name="sizeUnit" class="size_type">
                    <option value="0">{lang('transportation.sm')}</option>
                    <option value="1">{lang('transportation.m')}</option>
                </select>
            </div>

            <Block class="login_button_block">
                <Button type="submit" class="add_ride_button" round>{lang('transportation.add')}</Button>
            </Block>
        </form>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import {App, Page, Link, Block, Button, Icon, List, ListItem, Toolbar, Input, Popup, Navbar, NavRight} from 'framework7-svelte';
    import newMap from '@/js/map'
    import {api, lang, user} from '@/js/api'

    newMap('ride_from', 'ride_from_map', 'ride_long_from', 'ride_lat_from');
    newMap('ride_to', 'ride_to_map', 'ride_long_to', 'ride_lat_to');

    export let f7router;
    let popupOpened = false;
    let userInfo;
    let FreightType;
    let ServiceType;

    user.subscribe(value => {
        userInfo = value;
    });

    api.get('types/api/FreightType/'+userInfo.defaultLanguage).then((response) => {
        FreightType = response
    });

    api.get('types/api/ServiceType/'+userInfo.defaultLanguage).then((response) => {
        ServiceType = response
    });

    function addRide(event) {
        const formData = new FormData(event.target);
        const formRide = {};
        for (const [k, v] of formData.entries()) {
            formRide[k] = v
        }
        const take_arr = formRide.take.split(" - ");
        const delivery_arr = formRide.delivery.split(" - ");

        let newRide = {
            transportation: {
                phone: userInfo.phoneNumber,
                name: userInfo.fullName,
                startDatePickup: take_arr[0],
                endDatePickup: take_arr[1],
                startDateDelivery: delivery_arr[0],
                endDateDelivery: delivery_arr[1],
                level: parseInt(userInfo.levelAsTransporter),
                rating: parseInt(userInfo.transporterRating),
                freight: {
                    weight: parseInt(formRide.weight),
                    width: parseInt(formRide.width),
                    height: parseInt(formRide.height),
                    volume: parseInt(formRide.volume),
                    length: parseInt(formRide.length),
                    sizeUnit: parseInt(formRide.sizeUnit),
                    weightUnit: parseInt(formRide.weightUnit)
                },
                freightTypeId: parseInt(formRide.freightTypeId),
                serviceTypeId: parseInt(formRide.serviceTypeId)
            },
            place: {
                placeFrom: formRide.placeFrom,
                placeTo: formRide.placeTo,
                longitudeFrom: parseInt(formRide.longitudeFrom),
                latitudeFrom: parseInt(formRide.latitudeFrom),
                longitudeTo: parseInt(formRide.longitudeTo),
                latitudeTo: parseInt(formRide.latitudeTo)
            },
            payment: {
                price: 0,
                paymentType: 0,
                currency: 1,
                cardId: 0
            },
            additionalInfo: ""
        };

        api.post('transportations/api/Transportation', newRide).then((response) => {
            if(response.status !== 400){
                f7router.navigate('/ride/');
            }
        });
    }
</script>