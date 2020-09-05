<Page name="login" class="register_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <form class="register_1_form">

        <Block class="login_button_block">
            <Button on:click={() => toRegister(false)} class="register_buttons" round>{lang('auth.individual')}</Button>
        </Block>

        <Block class="login_button_block">
            <Button on:click={() => toRegister(true)} class="register_buttons" round>{lang('auth.organisation')}</Button>
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
    import {lang} from '@/js/api'

    export let f7router;

    function toRegister(status) {
        f7router.navigate('/register2/', { context: { isOrganizationUser: status } } );
    }
</script>