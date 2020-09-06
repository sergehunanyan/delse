<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
        </Link>

        <div class="header_navigation">
            <a href="/bid/" class="active">{lang('applications.my_requests')}</a>
            <a href="/search-bid/">{lang('applications.search')}</a>
        </div>
    </Block>

    <Block class="m-0">
        <form class="add_form">
            <div class="ride_from">
                <Input type="text" placeholder="{lang('applications.from')}:" inputId="bid_from"/>
                <Button fill popupOpen=".bid_from_popup" class="open_map">
                    <img src="./static/images/location.svg" alt="Location">
                </Button>
            </div>

            <Popup class="bid_from_popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
                <Page>
                    <Navbar>
                        <NavRight>
                            <Link popupClose>{lang('applications.close')}</Link>
                        </NavRight>
                    </Navbar>
                    <Block style="height:100%;margin:0;padding:0;">
                        <div id="bid_from_map" style="width: 100%; min-height: 100%;"></div>
                    </Block>
                </Page>
            </Popup>

            <div class="ride_from">
                <Input type="text" placeholder="{lang('applications.to')}:" inputId="bid_to"/>
                <Button fill popupOpen=".bid_to_popup" class="open_map">
                    <img src="./static/images/location.svg" alt="Location">
                </Button>
            </div>

            <Popup class="bid_to_popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
                <Page>
                    <Navbar>
                        <NavRight>
                            <Link popupClose>{lang('applications.close')}</Link>
                        </NavRight>
                    </Navbar>
                    <Block style="height:100%;margin:0;padding:0;">
                        <div id="bid_to_map" style="width: 100%; min-height: 100%;"></div>
                    </Block>
                </Page>
            </Popup>

            <div class="ride_dates">
                <div>
                    <p>{lang('applications.take')}:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
                <div>
                    <p>{lang('applications.delivery')}:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
            </div>

            <select name="type">
                <option value="0">{lang('applications.cargo_type')}:</option>
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
                <option value="0">{lang('applications.transport_type')}:</option>
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
                    <label for="ride_weight">{lang('applications.weight')}:<Input type="text" id="ride_weight"/></label>
                    <select name="weight">
                        <option value="0">{lang('applications.g')}</option>
                        <option value="1">{lang('applications.kg')}</option>
                        <option value="2">{lang('applications.t')}</option>
                    </select>
                </div>

                <div class="add_weight_block">
                    <label for="ride_size">{lang('applications.volume')}:<Input type="text" id="ride_size"/></label>
                    <p>{lang('applications.m3')}</p>
                </div>
            </div>

            <div class="add_sizes">
                <img src="./static/images/sizes_white.svg" alt="Sizes">

                <div class="add_sizes_middle">
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('applications.length')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('applications.width')}</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>{lang('applications.height')}</p>
                    </div>
                </div>

                <select name="size_type" class="size_type">
                    <option value="0">{lang('applications.sm')}</option>
                    <option value="1">{lang('applications.m')}</option>
                </select>

            </div>

            <textarea name="extra_info" class="extra_info" placeholder="{lang('applications.extra_info')}"></textarea>

            <div class="add_bid_bottom">
                <select name="payment_type">
                    <option value="0">{lang('applications.payment_type')}:</option>
                    <option value="1">{lang('applications.cash')}</option>
                </select>

                <label>
                    <div class="add_ride">
                        <span></span>
                        <span></span>
                    </div>
                    {lang('applications.add_photo')}
                    <Input type="file" class="file_input"/>
                </label>
            </div>

            <Block class="login_button_block">
                <Button href="/ride/" class="add_ride_button" round>{lang('applications.add')}</Button>
            </Block>
        </form>
    </Block>

    <Navigation/>

</Page>

<script>
    import {Page, Link, Block, Button, Icon, List, ListItem, Toolbar, Input, Popup, Navbar, NavRight} from 'framework7-svelte';
    import Navigation from '@/components/navigation.svelte'
    import {lang} from '@/js/api'
    import newMap from '@/js/map'

    newMap('bid_from', 'bid_from_map');
    newMap('bid_to', 'bid_to_map');

    export let f7router;

    let popupOpened = false;
</script>