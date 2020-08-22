<Page name="login" class="forgot_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="../../static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_login" href="/">
        <img src="../../static/images/back.svg" alt="Back">
    </Link>

    <form class="login_form">
        <Input type="email" placeholder="Email"/>

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