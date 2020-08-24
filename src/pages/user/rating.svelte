<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Рейтинг" route={f7router}/>

    <Block class="user_rating_block">
        <h5><u>Рейтинг заказчика:</u><span>4,2</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>Отправлено посылок: <span>27</span></p>
        <div class="watch_ratings">
            <p>Всего оценок: <span>15</span></p>
            <Link>Посмотреть оценки</Link>
        </div>
        <p>Статус: <span>Профессионал</span></p>
    </Block>

    <Block class="user_rating_block">
        <h5><u>Рейтинг перевозчика:</u><span>4,7</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>Отправлено посылок: <span>7</span></p>
        <div class="watch_ratings">
            <p>Всего оценок: <span>7</span></p>
            <Link>Посмотреть оценки</Link>
        </div>
        <p>Статус: <span>Новичок</span></p>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'

    import {
        Page,
        Block,
        Icon,
        Link,
    } from 'framework7-svelte';

    export let f7router;
</script>