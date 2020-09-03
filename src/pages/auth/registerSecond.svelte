<Page name="login" class="register_page">

    <Link href="/" class="logo">
        <span class="left_animation"></span>
        <img src="./static/images/logo.png" alt="Logo">
        <span class="right_animation"></span>
    </Link>

    <Link class="back_to_register" href="/register/">
        <img src="./static/images/back.svg" alt="Back">
    </Link>

    <form class="register_form" on:submit|preventDefault={register}>
        <input type="email" placeholder="Email" name="email" class="register_inputs"/>

        <input type="password" placeholder="Пароль" name="password" bind:value={password} class="register_inputs"/>

        <input type="password" placeholder="Повторите пароль" bind:value={confirm_password} class="register_inputs"/>

        <div class="validation_error">{errors}</div>

        {#if isOrganizationUser}
            <label for="user_rule">
                <Input type="checkbox" id="user_rule" required/>
                <Link href="/organization-rules/">Принимаю правила системы</Link>
            </label>

            <label for="user_policy">
                <Input type="checkbox" id="user_policy" required/>
                <Link href="/organization-policy/">Принимаю политику конфиденциальности</Link>
            </label>
        {:else}
            <label for="user_rule">
                <Input type="checkbox" id="user_rule" required/>
                <Link href="/rules/">Принимаю правила системы</Link>
            </label>

            <label for="user_policy">
                <Input type="checkbox" id="user_policy" required/>
                <Link href="/policy/">Принимаю политику конфиденциальности</Link>
            </label>
        {/if}

        <Block class="login_button_block">
            <Button class="login_button" type="submit" round>Зарегистрироваться</Button>
        </Block>
    </form>

</Page>

<script>
    import {onMount} from 'svelte';
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

    let password = '';
    let confirm_password = '';
    let errors = '';
    let isOrganizationUser = null;

    function register(event) {
        if(password !== confirm_password){
            errors = 'Password mismatch';
            return;
        }
        const formData = new FormData(event.target);
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }
        formUser['isOrganizationUser'] = isOrganizationUser;
        formUser['defaultLanguage'] = 2;
        api.post('users/api/mobile/Account/register', formUser)
                .then((response) => {
                    console.log(response)
                    if (response.status === 400) {
                        errors = response.data.errors.Password[0];
                    } else {
                        errors = '';
                        f7router.navigate('/confirm/', {context: {user: formUser}});
                    }
                })
    }

    onMount(() => {
        isOrganizationUser = f7route.context.isOrganizationUser
    });
</script>