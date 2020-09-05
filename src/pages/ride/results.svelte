<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user not_absolute" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
        </Link>

        <div class="header_navigation">
            <a href="/ride/">{lang('transportation.transportation')}</a>
            <a href="/search-ride/" class="active">{lang('transportation.search')}</a>
        </div>

        <div class="second_menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Block>

    <Block class="m-0">
        <List class="my_rides">
            <ListItem>
                <div class="ride_block">
                    <div class="ride_from_to_block">
                        <div class="from_to_animation">
                            <div class="animation_element"></div>
                            <div class="a"></div>
                            <div class="b"></div>
                        </div>
                        <div class="ride_from_to">
                            <p>Страна, Город
                                улица, номер дома, название объекта</p>
                            <p>Страна, Город
                                улица, номер дома, название объекта</p>
                        </div>
                    </div>
                    <div class="ride_dates">
                        <div>
                            <p>{lang('transportation.take')}:</p>
                            <p>17.07 - 20.07.2020</p>
                        </div>
                        <div>
                            <p>{lang('transportation.delivery')}:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="info">
                        <p><span>{lang('transportation.name')}: </span>Одежда</p>
                        <p><span>{lang('transportation.cargo_type')}: </span>Мелкогабаритные грузы</p>
                        <Block class="ride_img_params">
                            <p>
                                <img src="./static/images/weight.svg" alt="Weight" width="20" height="22">
                                <span>{lang('transportation.weight')}: </span>10 кг
                            </p>
                            <p>
                                <img src="./static/images/sizes.svg" alt="Weight" width="19" height="20">
                                <span>{lang('transportation.dimensions')}: </span>1 / 1 / 1,5 м
                            </p>
                        </Block>
                        <p><span>{lang('transportation.pay_type')}: </span>Карта</p>
                        <div class="ride_extra_info">{lang('transportation.info')}</div>
                        <div class="info_image">
                            <img src="./static/images/photo.svg" alt="Weight" width="20" height="22">
                            <span>{lang('transportation.photo')}</span>
                            <div class="full_image" style="background-image: url(./static/images/example.png)">
                                <div class="close">X</div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <Block class="ride_request_rating">
                            <div class="top">
                                <span>{lang('transportation.rating')}: </span>
                                <div class="rate">4,1</div>
                                <Icon f7="star_fill" size="16px" color="black" />
                            </div>
                            <div class="status">Профессионал</div>
                        </Block>
                        <Button round>{lang('transportation.send_request')}</Button>
                    </div>
                </div>
            </ListItem>
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import {Page, Link, Block, Button, Icon, List, ListItem, Toolbar, Tabs, Tab} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
</script>