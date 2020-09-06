<Page name="package" class="package_page">

    <Block class="rides_header">

        <div class="header_navigation">
            <a href="/package/">{lang('packages.parcels')}</a>
            <a href="/shipping/" class="active">{lang('packages.transportation')}</a>
        </div>

        <div class="second_menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Block>

    <Block class="m-0">
        <List class="my_rides my_packages">
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
                            <p>{lang('packages.take')}:</p>
                            <p>17.07 - 20.07.2020</p>
                        </div>
                        <div>
                            <p>{lang('packages.delivery')}:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="info">
                        <p><span>{lang('packages.name')}: </span>Одежда</p>
                    </div>
                    <div class="info hide">
                        <p><span>{lang('packages.name')}: </span>Одежда</p>
                        <p><span>{lang('packages.cargo_type')}: </span>Мелкогабаритные грузы</p>
                        <Block class="ride_img_params">
                            <p>
                                <img src="./static/images/weight.svg" alt="Weight" width="20" height="22">
                                <span>{lang('packages.weight')}: </span>10 кг
                            </p>
                            <p>
                                <img src="./static/images/sizes.svg" alt="Weight" width="19" height="20">
                                <span>{lang('packages.dimensions')}: </span>1 / 1 / 1,5 м
                            </p>
                        </Block>
                        <p><span>{lang('packages.pay_type')}: </span>1111 XXXX XXXX 4444 <img src="./static/images/visa.svg" alt="VISA" width="19" height="20"></p>
                        <div class="ride_extra_info">{lang('packages.info')}</div>
                        <div class="info_image">
                            <img src="./static/images/photo.svg" alt="Weight" width="20" height="22">
                            <span>{lang('packages.photo')}</span>
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
                                <span>{lang('packages.rating')}: </span>
                                <div class="rate">4,1</div>
                                <Icon f7="star_fill" size="16px" color="black" />
                                <div class="status">Профессионал</div>
                            </div>
                        </div>
                    </div>
                    <div class="ride_dates">
                        <div>
                            <p>{lang('packages.can_take')}:</p>
                            <p>20.07.2020</p>
                        </div>
                        <div>
                            <p>{lang('packages.can_deliver')}:</p>
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
                        <p>{lang('packages.status')}: <span>{lang('packages.accepted')}</span></p>
                        <Button href="/bid-requests/" round>{lang('packages.received')}</Button>
                    </div>
                </div>
            </ListItem>
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import {Page, Link, Block, Icon, List, ListItem, Button} from 'framework7-svelte';
    import {lang} from '@/js/api'
</script>