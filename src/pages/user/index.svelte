<Page name="user" class="user_page">

    <Block class="user_details">
        <div class="user_image"></div>
        <img src="../../static/images/edit.svg" alt="Edit" class="edit_profile">
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

    <List simpleList class="user_settings">
        <ListItem>Способы оплаты</ListItem>
        <ListItem>Настройки</ListItem>
        <ListItem>Рейтинг</ListItem>
        <ListItem>Пригласить друга</ListItem>
        <ListItem>О сервисе</ListItem>
        <ListItem>Служба поддержки</ListItem>
        <ListItem>Мы в соцсетях</ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'

    import {
        Page,
        Link,
        Block,
        Icon,
        List,
        ListItem,
    } from 'framework7-svelte';

</script>