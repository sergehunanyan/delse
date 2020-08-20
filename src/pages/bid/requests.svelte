<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" href="/bid/">
            <img src="../../static/images/back.svg" alt="Back">
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
                    <div class="ride_from_to">
                        <p>Страна, Город
                            улица, номер дома, название объекта</p>
                        <p>Страна, Город
                            улица, номер дома, название объекта</p>
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
                        <div class="add_bid_price">
                            <label>Стоимость: <Input type="text" readonly value="20"/></label>
                            <select name="transport">
                                <option value="0">BYN</option>
                                <option value="1">USD</option>
                                <option value="2">EUR</option>
                                <option value="3">AMD</option>
                            </select>
                        </div>
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
                        <Button round>Отправить предложение</Button>
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
        Input,
        List,
        ListItem
    } from 'framework7-svelte';

</script>