<Page name="user_settings" class="user_settings_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.settings')}" route={f7router}/>

    <List simpleList class="user_settings_list">
        <ListItem>
            <span>{lang('profile.notification_status')}</span>
            <Toggle color="green"></Toggle>
        </ListItem>
        <ListItem>
            <span>{lang('profile.select_language')}</span>
            <select name="language" id="language">
                <option value="ru">{lang('profile.russian')}</option>
                <option value="en">{lang('profile.english')}</option>
            </select>
        </ListItem>
        <ListItem>
            <Link href="/password/">{lang('profile.change_password_link')}</Link>
        </ListItem>
        <ListItem on:click={deleteAccount}>{lang('profile.delete_account')}</ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {Page, List, ListItem, Toggle, Link} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;

    function deleteAccount() {
        f7router.navigate('/login/');
        api.del('users/api/mobile/Account/Delete');
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }
</script>