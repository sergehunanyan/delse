<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link href="/add-ride/" class="add_ride">
            <span></span>
            <span></span>
        </Link>

        <div class="header_navigation">
            <a href="/ride/" class="active">Мои поездки</a>
            <a href="/search-ride/">Найти заявки</a>
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
                            <p><img src="../../static/images/weight.svg" alt="Weight" width="20" height="22"><span>ВЕС: </span>10 кг</p>
                            <p><img src="../../static/images/sizes.svg" alt="Weight" width="19" height="20"><span>ГАБАРИТЫ: </span>1 / 1 / 1,5  м</p>
                        </Block>
                        <p><span>ТИП ТРАНСПОРТА: </span>Поезд</p>
                    </div>
                    <div class="bottom">
                        <p><span>Всего заявок: </span>2</p>
                        <Button href="/ride-requests/" round>Посмотреть заявки</Button>
                    </div>
                </div>
            </ListItem>
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'

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

</script>