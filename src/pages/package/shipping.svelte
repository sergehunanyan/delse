<Page name="package" class="package_page">

    <Block class="rides_header">

        <div class="header_navigation">
            <a href="/package/">Посылки</a>
            <a href="/shipping/" class="active">Перевозки</a>
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
                    </div>
                    <div class="info hide">
                        <p><span>НАИМЕНОВАНИЕ: </span>Одежда</p>
                        <p><span>ТИП ГРУЗА: </span>Мелкогабаритные грузы</p>
                        <Block class="ride_img_params">
                            <p><img src="./static/images/weight.svg" alt="Weight" width="20"
                                    height="22"><span>ВЕС: </span>10 кг</p>
                            <p><img src="./static/images/sizes.svg" alt="Weight" width="19"
                                    height="20"><span>ГАБАРИТЫ: </span>1 / 1 / 1,5 м</p>
                        </Block>
                        <p><span>СПОСОБ ОПЛАТЫ: </span>1111 XXXX XXXX 4444 <img src="./static/images/visa.svg" alt="VISA" width="19" height="20"></p>
                        <div class="ride_extra_info">Дополнительная информация о грузе, особенностях упаковки и подробности доставки</div>
                        <div class="info_image">
                            <img src="./static/images/photo.svg" alt="Weight" width="20" height="22">
                            <span>Посмотреть фото</span>
                            <div class="full_image" style="background-image: url(./static/images/example.png)">
                                <div class="close">X</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="package_block">
                    <div class="image_block">
                        <div class="user_image" style="background-image:url(./static/images/user.png)"></div>
                        <div class="user_info">
                            <p>Фамилия Имя Отчество</p>
                            <div>
                                <span>Рейтинг: </span>
                                <div class="rate">4,1</div>
                                <Icon f7="star_fill" size="16px" color="black" />
                                <div class="status">Профессионал</div>
                            </div>
                        </div>
                    </div>
                    <div class="ride_dates">
                        <div>
                            <p>ЗАБЕРУ:</p>
                            <p>20.07.2020</p>
                        </div>
                        <div>
                            <p>ДОСТАВЛЮ:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="package_block_bottom">
                        <div>
                            <img src="./static/images/phone.svg" alt="Phone" width="20" height="20">
                            <span>+375 44 518 26 76</span>
                        </div>
                        <div>
                            <img src="./static/images/price.svg" alt="Price" width="20" height="20">
                            <span>20   BYN</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <p>Статус: <span>Предложение принято</span></p>
                        <Button href="/bid-requests/" round>Груз получен</Button>
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
        Icon,
        List,
        ListItem,
        Button,
    } from 'framework7-svelte';

</script>