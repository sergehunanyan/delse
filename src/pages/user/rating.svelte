<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.rating')}" route={f7router}/>

    <Block class="user_rating_block">
        <h5><u>{lang('profile.customer_rating')}:</u><span>{info.ordererRating}</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>{lang('profile.parcels_send')}: <span>{info.publishedApplicationsCount}</span></p>
        <div class="watch_ratings">
            <p>{lang('profile.rates_count')}: <span>15</span></p>
            <Link>{lang('profile.watch_ratings')}</Link>
        </div>
        <p>{lang('profile.status')}: <span>{info.ordererLevelName}</span></p>
    </Block>

    <Block class="user_rating_block last">
        <h5><u>{lang('profile.transporter_rating')}:</u><span>{info.transporterRating}</span><Icon f7="star_fill" size="16px" color="black" /></h5>
        <p>{lang('profile.parcels_delivered')}: <span>{info.completedOrdersCount}</span></p>
        <div class="watch_ratings">
            <p>{lang('profile.rates_count')}: <span>7</span></p>
            <Link>{lang('profile.watch_ratings')}</Link>
        </div>
        <p>{lang('profile.status')}: <span>{info.transporterLevelName}</span></p>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {Page, Block, Icon, Link} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
    let info = {};

    api.get('users/api/mobile/Account/GetAccountInfo')
            .then((response) => {
                info = response
            })
</script>