<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Изменение пароля"/>

    <form class="reset_password_form">
        <Input type="email" placeholder="Введите новый пароль"/>

        <Input type="password" placeholder="Повторите пароль"/>

        <Block class="login_button_block">
            <Button href="/user/" class="login_button" round>Готово</Button>
        </Block>
    </form>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'
    import UserInfo from '../../components/UserInfo.svelte'
    import ProfileHeading from '../../components/profileHeading.svelte'

    import {
        Page,
        Input,
        Block,
        Button,
    } from 'framework7-svelte';
</script>