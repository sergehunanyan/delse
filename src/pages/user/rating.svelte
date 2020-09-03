<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Рейтинг" route={f7router}/>

    <Block class="user_rating_block">
        <h5><u>Рейтинг заказчика:</u><span>{info.ordererRating}</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>Отправлено посылок: <span>{info.publishedApplicationsCount}</span></p>
        <div class="watch_ratings">
            <p>Всего оценок: <span>15</span></p>
            <Link>Посмотреть оценки</Link>
        </div>
        <p>Статус: <span>{info.ordererLevelName}</span></p>
    </Block>

    <Block class="user_rating_block last">
        <h5><u>Рейтинг перевозчика:</u><span>{info.transporterRating}</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>Доставлено посылок: <span>{info.completedOrdersCount}</span></p>
        <div class="watch_ratings">
            <p>Всего оценок: <span>7</span></p>
            <Link>Посмотреть оценки</Link>
        </div>
        <p>Статус: <span>{info.transporterLevelName}</span></p>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import api from '@/js/api'

    import {
        Page,
        Block,
        Icon,
        Link,
    } from 'framework7-svelte';

    export let f7router;
    let info = {};

    api.get('users/api/mobile/Account/GetAccountInfo')
            .then((response) => {
                info = response
            })
</script>