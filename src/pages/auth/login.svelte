<Page name="login" class="login_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <form class="login_form" on:submit|preventDefault={login}>
        <Input type="email" name="email" placeholder="{lang('auth.email')}"/>

        <Input type="password" name="password" placeholder="{lang('auth.password')}"/>

        <Link class="to_forgot" href="/forgot/">{lang('auth.forgot')}</Link>

        <div class="validation_error">{errors}</div>

        <Block class="login_button_block">
            <Button type="submit" class="login_button" round>{lang('auth.login')}</Button>
        </Block>
    </form>

    <Block class="login_button_block">
        <Link class="to_register" href="/register/">{lang('auth.register')}</Link>
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
    let errors = '';

    function login(event) {
        const formData = new FormData(event.target)
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }

        api.post('users/api/mobile/Account/Login', formUser)
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
</script>