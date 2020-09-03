<Page name="login" class="forgot_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_login" href="/">
        <img src="./static/images/back.svg" alt="Back">
    </Link>

    <p class="confirm_email_text">Введите проверочный код</p>

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
            <Button id="confirm_btn" type="submit" class="forgot_buttons" round>Далее</Button>
        </Block>
    </form>

    <Block class="send_again">
        <Button on:click={sendAgain}>Отправить код повторно</Button>
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
        formUser.currentEmail = f7route.context.user.email

        api.post('users/api/mobile/Account/CheckEmailVerificationCode', formUser)
                .then((response) => {
                    if(response.status === 400){
                        code = '';
                        errors = 'Wrong code';
                    }else{
                        errors = '';
                        api.post('users/api/mobile/Account/VerifyViaEmail', formUser).then((response) => {
                            if(response.status === 400){
                                errors = 'Wrong code';
                            }else{
                                errors = '';
                                delete f7route.context.user.isOrganizationUser;
                                delete f7route.context.user.defaultLanguage;
                                api.post('users/api/mobile/Account/Login', f7route.context.user)
                                        .then((response) => {
                                            if(response.status === 400){
                                                errors = response.data.value;
                                            }else{
                                                errors = '';
                                                localStorage.setItem("token", response.accessToken)
                                                f7router.navigate('/user/', { context: { user: response.userProfile } });
                                            }
                                        })
                            }
                        })
                    }
                })
    }

    function sendAgain() {
        api.post('users/api/mobile/Account/register', f7route.context.user)
    }

</script>