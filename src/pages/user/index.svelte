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
    import { onMount } from 'svelte';
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

    onMount(() => {
        // if(f7route.context && f7route.context.user){
        //     let formUser = {
        //         email: f7route.context.user.email,
        //         password: f7route.context.user.password
        //     }
        //     api.post('users/api/mobile/Account/Login', formUser)
        //     console.log(f7route.context.user)
        // }
    });
</script>