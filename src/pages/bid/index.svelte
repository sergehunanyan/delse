<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link href="/add-bid/" class="add_ride">
            <span></span>
            <span></span>
        </Link>

        <div class="header_navigation">
            <a href="/bid/" class="active">Мои заявки</a>
            <a href="/search-bid/">Найти поездки</a>
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
                            <p>НУЖНО ЗАБРАТЬ:</p>
                            <p>17.07 - 20.07.2020</p>
                        </div>
                        <div>
                            <p>НУЖНО ДОСТАВИТЬ:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="info">
                        <p><span>НАИМЕНОВАНИЕ: </span>Одежда</p>
                        <p><span>ТИП ГРУЗА: </span>Мелкогабаритные грузы</p>
                        <Block class="ride_img_params">
                            <p><img src="../../static/images/weight.svg" alt="Weight" width="20"
                                    height="22"><span>ВЕС: </span>10 кг</p>
                            <p><img src="../../static/images/sizes.svg" alt="Weight" width="19"
                                    height="20"><span>ГАБАРИТЫ: </span>1 / 1 / 1,5 м</p>
                        </Block>
                        <p><span>СПОСОБ ОПЛАТЫ: </span>1111 XXXX XXXX 4444 <img src="../../static/images/visa.svg" alt="VISA" width="19" height="20"></p>
                        <div class="ride_extra_info">Дополнительная информация о грузе, особенностях упаковки и подробности доставки</div>
                        <div class="info_image">
                            <img src="../../static/images/photo.svg" alt="Weight" width="20" height="22">
                            <span>Посмотреть фото</span>
                            <div class="full_image" style="background-image: url(../../static/images/example.png)">
                                <div class="close">X</div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <p><span>Всего предложений: </span>2</p>
                        <Button href="/bid-requests/" round>Посмотреть предложения</Button>
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
        ListItem
    } from 'framework7-svelte';

</script>