<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Настройки"/>

    <h3>Rating</h3>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'
    import UserInfo from '../../components/UserInfo.svelte'
    import ProfileHeading from '../../components/profileHeading.svelte'

    import {
        Page
    } from 'framework7-svelte';
</script>