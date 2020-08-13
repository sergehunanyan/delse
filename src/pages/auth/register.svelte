<Page name="login" class="register_page">

    <Link href="/" class="logo">
        <img src="../../static/images/logo.png" alt="Logo">
    </Link>

    <form class="register_1_form">

        <Block class="login_button_block">
            <Button href="/register2/" class="register_buttons" round>Физическое лицо</Button>
        </Block>

        <Block class="login_button_block">
            <Button href="/register2/" class="register_buttons" round>Юридическое лицо</Button>
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