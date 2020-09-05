<Page name="login" class="forgot_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_login" href="/">
        <img src="./static/images/back.svg" alt="Back">
    </Link>

    <p class="confirm_email_text">{lang('auth.enter_code')}</p>

    <form id="confirm_form" class="login_form" on:submit|preventDefault={confirm}>
        <div class="confirm_input_block">
            <input type="number" min="100000" max="999999" name="code" class="register_confirm_input" on:input={checkCode} bind:value={code}/>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="validation_error">{errors}</div>

        <Block class="login_button_block">
            <Button id="confirm_btn" type="submit" class="forgot_buttons" round>{lang('auth.next')}</Button>
        </Block>
    </form>

    <Block class="send_again">
        <Button on:click={sendAgain}>{lang('auth.send_again')}</Button>
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
    import {lang, api} from '@/js/api'

    export let f7router;
    export let f7route;
    let errors = '';
    let code = '';

    function checkCode() {
        if (code.toString().length === 5){
            document.getElementById('confirm_btn').click();
        }
    }

    function confirm(event) {
        const formData = new FormData(event.target)
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }
        formUser.emailOrPhoneNumber = f7route.context.email.email

        api.post('users/api/mobile/Account/CheckRecoveryCode', formUser)
                .then((response) => {
                    if(response.status === 400){
                        code = '';
                        errors = lang('auth.wrong_code');
                    }else{
                        errors = '';
                        f7router.navigate('/forgot-password/', { context: { data: formUser } });
                    }
                })
    }

    function sendAgain() {
        api.post('users/api/mobile/Account/SendEmailPasswordRecovery', f7route.context.email.email)
    }

</script>