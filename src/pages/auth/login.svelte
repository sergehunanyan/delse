<Page name="login" class="login_page">


    <div id="map" style="width: 600px; height: 400px"></div>

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <form class="login_form" on:submit|preventDefault={login}>
        <Input type="email" name="email" placeholder="Email"/>

        <Input type="password" name="password" placeholder="Пароль"/>

        <Link class="to_forgot" href="/forgot/">Забыли пароль?</Link>

        <div class="validation_error {validation_error === true ? 'show' : 'hide'}">Неверные данные</div>

        <Block class="login_button_block">
            <Button type="submit" class="login_button" round>Войти</Button>
        </Block>
    </form>

    <Block class="login_button_block">
        <Link class="to_register" href="/register/">ЗАРЕГИСТРИРОВАТЬСЯ</Link>
    </Block>

</Page>

<script>
    import {
        Page,
        Link,
        Button,
        Block,
        Input,
    } from 'framework7-svelte';
    import api from '@/js/api'

    let validation_error = false;
    export let f7router;

    function login(event) {
        const formData = new FormData(event.target);
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }

        api.post('users/api/mobile/Account/Login', formUser)
            .then((response) => {
                validation_error = false;
                f7router.navigate('/user/', response.userProfile);
            }, () => {
                validation_error = true;
            })
    }
</script>