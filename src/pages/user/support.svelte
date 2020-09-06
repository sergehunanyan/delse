<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.support')}" route={f7router}/>

    <Block class="socials_block">

        <p>{lang('profile.select_support')}</p>

        <List simpleList class="socials_list">
            <ListItem>
                <a target="_blank" href="https://in.com">
                    <img src="./static/images/viber.png" alt="Viber" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://tg.com">
                    <img src="./static/images/tg.png" alt="TG" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://ok.com">
                    <img src="./static/images/wa.png" alt="WA" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://fb.com">
                    <img src="./static/images/skype.png" alt="Skype" width="62" height="62">
                </a>
            </ListItem>
        </List>

        <p>{lang('profile.support_another')}</p>

        <form class="invite_form">
            <Input type="email" placeholder="{lang('profile.email')}"/>

            <div class="invite_button_block">
                <Button href="/user/" class="invite_button" round>{lang('profile.send')}</Button>
            </div>
        </form>

    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {Page, Block, List, ListItem, Input, Button} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
</script>