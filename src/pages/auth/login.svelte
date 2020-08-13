<Page name="login" class="login_page">

    <Link href="/" class="logo">
        <img src="../../static/images/logo.png" alt="Logo">
    </Link>

    <form class="login_form">
        <Input type="text" placeholder="Номер телефона" on:focus={addPlus} {value}/>

        <Input type="password" placeholder="Пароль"/>

        <Link class="to_forgot" href="/forgot/">Забыли пароль?</Link>

        <Block class="login_button_block">
            <Button href="/user/" class="login_button" round>Войти</Button>
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

    let value = '';
    function addPlus() {
        if(value === ''){
            value = '+';
        }
    }
</script>