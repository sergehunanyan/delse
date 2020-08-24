<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Способы оплаты" route={f7router}/>

    <h3>Cards</h3>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'

    import {
        Page
    } from 'framework7-svelte';

    export let f7router;
</script>