<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user not_absolute" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
        </Link>

        <div class="header_navigation">
            <a href="/bid/">Мои заявки</a>
            <a href="/search-bid/" class="active">Найти поездки</a>
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
                            <p>МОГУ ЗАБРАТЬ:</p>
                            <p>17.07 - 20.07.2020</p>
                        </div>
                        <div>
                            <p>МОГУ ДОСТАВИТЬ:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="info">
                        <p><span>ТИП ГРУЗА: </span>Мелкогабаритные грузы</p>
                        <Block class="ride_img_params">
                            <p><img src="./static/images/weight.svg" alt="Weight" width="20"
                                    height="22"><span>ВЕС: </span>10 кг</p>
                            <p><img src="./static/images/sizes.svg" alt="Weight" width="19"
                                    height="20"><span>ГАБАРИТЫ: </span>1 / 1 / 1,5 м</p>
                        </Block>
                        <p><span>ТИП ТРАНСПОРТА: </span>Поезд</p>
                    </div>
                    <div class="bottom">
                        <Block class="ride_request_rating">
                            <div class="top">
                                <span>Рейтинг: </span>
                                <div class="rate">4,1</div>
                                <Icon f7="star_fill" size="16px" color="black" />
                            </div>
                            <div class="status">Профессионал</div>
                        </Block>
                        <Button round>Оставить заявку</Button>
                    </div>
                </div>
            </ListItem>
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'

    import {
        Page,
        Link,
        Block,
        Button,
        Icon,
        List,
        ListItem,
        Toolbar,
        Tabs,
        Tab
    } from 'framework7-svelte';

    export let f7router;
</script>