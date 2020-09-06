<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.change_password')}" route={f7router}/>

    <form class="reset_password_form" on:submit|preventDefault={changePassword}>

        <Input type="password" placeholder="{lang('profile.current_password')}" name="currentPassword"/>

        <input type="password" placeholder="{lang('profile.new_password')}" name="newPassword" bind:value={password}/>

        <input type="password" placeholder="{lang('profile.confirm_password')}" bind:value={confirm_password}/>

        <div class="validation_error">{errors}</div>

        <Block class="login_button_block">
            <Button type="submit" class="login_button" round>{lang('profile.ready')}</Button>
        </Block>
    </form>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {api, lang} from '@/js/api'

    import {
        Page,
        Input,
        Block,
        Button,
    } from 'framework7-svelte';

    export let f7router;
    let errors = '';
    let info = '';
    let password = '';
    let confirm_password = '';

    api.get('users/api/mobile/Account/GetAccountInfo')
            .then((response) => {
                info = response
            })

    function changePassword(event) {
        if(password !== confirm_password){
            errors = lang('profile.mismatch');
            return;
        }
        const formData = new FormData(event.target);
        const formUser = {}
        for (const [k, v] of formData.entries()) {
            formUser[k] = v
        }
        formUser.email = info.email
        api.post('users/api/mobile/Account/ChangePassword', formUser)
                .then((response) => {
                    console.log(response)
                    if (response.status === 200) {
                        errors = '';
                        f7router.navigate('/user/');
                    } else {
                        errors = lang('profile.wrong');
                    }
                })
    }
</script>