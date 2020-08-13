<Page name="login" class="forgot_page">

    <Link href="/" class="logo">
        <img src="../../static/images/logo.png" alt="Logo">
    </Link>

    <Link class="back_to_login" href="/">
        <img src="../../static/images/back.svg" alt="Back">
    </Link>

    <form class="login_form">
        <Input type="text" placeholder="Номер телефона"/>

        <Block class="login_button_block">
            <Button class="forgot_buttons" round>Отправить SMS</Button>
        </Block>

        <Block class="login_button_block">
            <Button class="forgot_buttons" round>Отправить E-mail</Button>
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