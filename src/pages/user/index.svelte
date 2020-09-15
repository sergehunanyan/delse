<Page name="user" class="user_page">

    <UserInfo/>

    <List simpleList class="user_settings">
        <ListItem>
            <Link href="/payment-systems/">{lang('profile.pay_types')}</Link>
        </ListItem>
        <ListItem>
            <Link href="/settings/">{lang('profile.settings')}</Link>
        </ListItem>
        <ListItem>
            <Link href="/rating/">{lang('profile.rating')}</Link>
        </ListItem>
        <ListItem>
            <Link href="/invite/">{lang('profile.invite')}</Link>
        </ListItem>
        <ListItem>{lang('profile.about')}</ListItem>
        <ListItem>
            <Link href="/support/">{lang('profile.support')}</Link>
        </ListItem>
        <ListItem>
            <Link href="/socials/">{lang('profile.socials')}</Link>
        </ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import {Page, List, ListItem, Link} from 'framework7-svelte';
    import {api, lang, user} from '@/js/api'

    export let f7router;

    let user_info;

    api.get('users/api/mobile/Account/GetAccountInfo')
            .then((response) => {
                if (response.status === 401) {
                    api.get('users/api/Token/Refresh')
                            .then((response) => {
                                if (response.status === 200) {
                                    localStorage.setItem("token", response.accessToken)
                                    localStorage.setItem("refreshToken", response.refreshToken)
                                } else {
                                    f7router.navigate('/login/');
                                }
                            })
                }else{
                    user.update(value => response);
                    user.subscribe(value => {
                        user_info = value;
                    });

                }
            })
</script>