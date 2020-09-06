<Page name="user" class="socials_page">

    <UserInfo/>

    <ProfileHeading heading="{lang('profile.settings')}" route={f7router}/>

    <Block class="socials_block">

        <p>{lang('profile.add_socials')}</p>

        <List simpleList class="socials_list">
            <ListItem>
                <a target="_blank" href="https://in.com">
                    <img src="./static/images/in.png" alt="Instagram" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://vk.com">
                    <img src="./static/images/vk.png" alt="VK" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://ok.com">
                    <img src="./static/images/ok.png" alt="OK" width="62" height="62">
                </a>
            </ListItem>
            <ListItem>
                <a target="_blank" href="https://fb.com">
                    <img src="./static/images/fb.png" alt="FB" width="62" height="62">
                </a>
            </ListItem>
        </List>

    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import UserInfo from '@/components/UserInfo.svelte'
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {Page, Block, ListItem, List, Link} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

    export let f7router;
</script>