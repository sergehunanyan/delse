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
        <img src="../static/images/edit.svg" alt="Edit">
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