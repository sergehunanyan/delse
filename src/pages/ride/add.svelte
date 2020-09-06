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
                <Input type="text" placeholder="{lang('transportation.from')}:" name="ride_from" inputId="ride_from" on:change={() => asd}/>
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
                <Input type="text" placeholder="{lang('transportation.to')}:" inputId="ride_to" name="ride_to"/>
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
                    <Input type="datepicker" placeholder="dd.mm - dd.mm.yyyy" readonly calendarParams={{ dateFormat: 'yyyy-mm-dd', rangePicker: true }} />
                </div>
                <div>
                    <p>{lang('transportation.can_deliver')}:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
            </div>

            <select name="type">
                <option value="0">{lang('transportation.cargo_type')}:</option>
                <option value="1">Бумаги/документы</option>
                <option value="2">Мелкогабаритные</option>
                <option value="3">Среднегабаритные</option>
                <option value="4">Крупногабаритные</option>
                <option value="5">Наливные</option>
                <option value="6">Сыпучие</option>
                <option value="7">Низкотемпературные</option>
                <option value="8">Мусор и отходы</option>
            </select>

            <select name="transport">
                <option value="0">{lang('transportation.transport_type')}:</option>
                <option value="1">Вело/Мото</option>
                <option value="2">Поезд</option>
                <option value="3">Легковой автомобиль</option>
                <option value="4">Минивэн</option>
                <option value="5">Микроавтобус</option>
                <option value="6">Грузовой автомобиль</option>
                <option value="7">Самолёт</option>
            </select>

            <div class="add_weight">
                <div class="add_weight_block">
                    <label for="ride_weight">{lang('transportation.weight')}:<Input type="text" id="ride_weight"/></label>
                    <select name="weight">
                        <option value="0">{lang('transportation.g')}</option>
                        <option value="1">{lang('transportation.kg')}</option>
                        <option value="2">{lang('transportation.t')}</option>
                    </select>
                </div>

                <div class="add_weight_block">
                    <label for="ride_size">{lang('transportation.volume')}:<Input type="text" id="ride_size"/></label>
                    <p>{lang('transportation.m3')}</p>
                </div>
            </div>

            <div class="add_sizes">
                <img src="./static/images/sizes_white.svg" alt="Sizes">

                <div class="add_sizes_middle">
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('transportation.length')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('transportation.width')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('transportation.height')}</p>
                    </div>
                </div>

                <select name="size_type" class="size_type">
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
    import {api, lang} from '@/js/api'

    newMap('ride_from', 'ride_from_map');
    newMap('ride_to', 'ride_to_map');

    export let f7router;
    let popupOpened = false;

    function addRide(event) {
        const formData = new FormData(event.target);
        const formRide = {}
        for (const [k, v] of formData.entries()) {
            formRide[k] = v
        }
        console.log(formRide)
    }
</script>