<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user not_absolute" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
        </Link>

        <div class="header_navigation">
            <a href="/bid/" class="active">{lang('applications.my_requests')}</a>
            <a href="/search-bid/">{lang('applications.search')}</a>
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
                            <p>{lang('applications.take')}:</p>
                            <p>17.07 - 20.07.2020</p>
                        </div>
                        <div>
                            <p>{lang('applications.delivery')}:</p>
                            <p>21.07.2020</p>
                        </div>
                    </div>
                    <div class="info">
                        <div class="add_bid_price">
                            <label>{lang('applications.price')}: <Input type="text" readonly value="20"/></label>
                            <select name="transport" disabled>
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
                                <span>{lang('applications.rating')}: </span>
                                <div class="rate">4,1</div>
                                <Icon f7="star_fill" size="16px" color="black" />
                            </div>
                            <div class="status">Профессионал</div>
                        </Block>
                        <Button round>{lang('applications.send_request')}</Button>
                    </div>
                </div>
            </ListItem>
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import {Page, Link, Block, Button, Icon, Input, List, ListItem} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
</script>