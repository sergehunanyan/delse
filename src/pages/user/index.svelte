<Page name="user" class="user_page">

    <UserInfo/>

    <List simpleList class="user_settings">
        <ListItem>
            <Link href="/payment-systems/">Способы оплаты</Link>
        </ListItem>
        <ListItem>
            <Link href="/settings/">Настройки</Link>
        </ListItem>
        <ListItem>
            <Link href="/rating/">Рейтинг</Link>
        </ListItem>
        <ListItem>
            <Link href="/invite/">Пригласить друга</Link>
        </ListItem>
        <ListItem>О сервисе</ListItem>
        <ListItem>
            <Link href="/support/">Служба поддержки</Link>
        </ListItem>
        <ListItem>
            <Link href="/socials/">Мы в соцсетях</Link>
        </ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import api from '@/js/api'

    import {
        Page,
        List,
        ListItem,
        Link
    } from 'framework7-svelte';

    export let f7router;
    export let f7route;

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
                }
            })
</script>