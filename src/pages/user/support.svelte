<Page name="user" class="user_page">

    <UserInfo/>

    <ProfileHeading heading="Служба поддержки"/>

    <Block class="socials_block">

        <p>Выберите мессенджер,
            чтобы отправить сообщение</p>

        <List simpleList class="socials_list">
            <ListItem>
                <a target="_blank" href="https://in.com">
                    <img src="../../static/images/viber.png" alt="Viber" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://tg.com">
                    <img src="../../static/images/tg.png" alt="TG" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://ok.com">
                    <img src="../../static/images/wa.png" alt="WA" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://fb.com">
                    <img src="../../static/images/skype.png" alt="Skype" width="62" height="62">
                </a>
            </ListItem>
        </List>

        <p>или отправьте cообщение
            по электронной почте</p>

        <form class="invite_form">
            <Input type="email" placeholder="Email"/>

            <div class="invite_button_block">
                <Button href="/user/" class="invite_button" round>Отправить</Button>
            </div>
        </form>

    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'
    import UserInfo from '../../components/UserInfo.svelte'
    import ProfileHeading from '../../components/profileHeading.svelte'

    import {
        Page,
        Block,
        List,
        ListItem,
        Input,
        Button,
    } from 'framework7-svelte';
</script>