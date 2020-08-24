<Popup class="demo-popup-swipe" swipeToClose>
    <Page>
        <Navbar title="Swipe To Close">
            <NavRight>
                <Link popupClose>Close</Link>
            </NavRight>
        </Navbar>

        <div style="height: 100%" class="display-flex justify-content-center align-items-center">
            <p>Swipe me up or down</p>
        </div>
    </Page>
</Popup>

<Block class="user_details">
    <div class="user_image"></div>
    <Button popupOpen=".demo-popup-swipe" class="edit_profile">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" viewBox="0 0 645 645" width="20" height="20"><path xmlns:default="http://www.w3.org/2000/svg" d="M539.3 0L0 539.3v105.2h105.2l539.3-539.3L539.3 0zm68.4 105.2l-63.1 63.1-68.4-68.3 63.1-63.1 68.4 68.3zm-513 513.1H26.3v-68.4L457.8 121l68.4 68.4L94.7 618.3z" vector-effect="non-scaling-stroke" fill="#fff"/></svg>
    </Button>
    <p class="name">Тухфатуллина Мария Сергеевна</p>
    <p class="country">Беларусь, Минск</p>

    <div class="user_ratings">
        <Block>
            <p>Рейтинг заказчика:</p>
            <div class="rate_details">
                <div class="rate">4,7</div>
                <Icon f7="star_fill" size="16px" color="black" />
                <div class="status">Профессионал</div>
            </div>
        </Block>
        <Block>
            <p>Рейтинг перевозчика:</p>
            <div class="rate_details">
                <div class="rate">4,2</div>
                <Icon f7="star_fill" size="16px" color="black" />
                <div class="status">Новичок</div>
            </div>
        </Block>
    </div>

</Block>

<script>
    import {
        Page,
        Popup,
        Navbar,
        NavRight,
        Block,
        Icon,
        Button,
        Link
    } from 'framework7-svelte';
</script>