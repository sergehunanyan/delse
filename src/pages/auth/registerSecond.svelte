<Page name="login" class="register_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="../../static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_register" href="/register/">
        <img src="../../static/images/back.svg" alt="Back">
    </Link>

    <form class="register_form">
        <Input type="email" placeholder="Email"/>

        <Input type="password" placeholder="Пароль"/>

        <Input type="password" placeholder="Повторите пароль"/>
        <label>
            <Input type="checkbox"/> Принимаю правила системы
        </label>

        <label>
            <Input type="checkbox"/> Принимаю политику конфиденциальности
        </label>


        <Block class="login_button_block">
            <Button class="login_button" href="/user/" round>Зарегистрироваться</Button>
        </Block>
    </form>

</Page>

<script>
    import {
        Page,
        Link,
        Button,
        Block,
        Input,
    } from 'framework7-svelte';
</script>