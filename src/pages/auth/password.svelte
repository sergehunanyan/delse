<Page name="login" class="login_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <form class="login_form" on:submit|preventDefault={login}>
        <Input type="password" name="password" placeholder="{lang('auth.new_password')}"/>

        <Input type="password" name="password_confirmation" placeholder="{lang('auth.password_confirmation')}"/>

        <div class="validation_error">{errors}</div>

        <Block class="login_button_block">
            <Button type="submit" class="login_button" round>{lang('auth.login')}</Button>
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

    function login(event) {
        const formData = new FormData(event.target)
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }

        let new_arr = f7route.context.data;
        new_arr.email = f7route.context.data.emailOrPhoneNumber;
        new_arr.newPassword = formUser.password;
        delete new_arr.emailOrPhoneNumber;

        api.post('users/api/mobile/Account/RecoverPasswordViaEmail', new_arr).then((response) => {
            if(response.status === 400){
                errors = lang('auth.wrong_code');
            }else{
                errors = '';
                delete new_arr.code;
                new_arr.password = new_arr.newPassword
                delete new_arr.newPassword;
                api.post('users/api/mobile/Account/Login', new_arr)
                        .then((response) => {
                            if(response.status === 400){
                                errors = response.data.value;
                            }else{
                                errors = '';
                                localStorage.setItem("token", response.accessToken)
                                localStorage.setItem("refreshToken", response.refreshToken)
                                f7router.navigate('/user/', { context: { user: response.userProfile } });
                            }
                        })
            }
        })
    }

    function sendAgain() {
        api.post('users/api/mobile/Account/SendEmailPasswordRecovery', f7route.context.data.emailOrPhoneNumber)
    }
</script>