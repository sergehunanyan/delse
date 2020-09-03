<Page name="login" class="forgot_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_login" href="/">
        <img src="./static/images/back.svg" alt="Back">
    </Link>

    <form class="login_form" on:submit|preventDefault={forgot}>
        <Input type="email" placeholder="Email" name="email"/>

        <div class="validation_error">{errors}</div>

        <Block class="login_button_block">
            <Button type="submit" class="forgot_buttons" round>Отправить E-mail</Button>
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
    import api from '@/js/api'

    export let f7router;
    let errors = '';

    function forgot(event) {
        const formData = new FormData(event.target)
        const email = {};
        for (const [k, v] of formData.entries()) {
            email[k] = v
        }

        api.post('users/api/mobile/Account/SendEmailPasswordRecovery', email)
                .then((response) => {
                    if(response.status === 404){
                        errors = response.statusText;
                    }else{
                        errors = '';
                        f7router.navigate('/forgot-confirm/', { context: { email: email } });
                    }
                })
    }
</script>