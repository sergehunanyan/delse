<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.pay_types')}" route={f7router}/>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {Page} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
</script>