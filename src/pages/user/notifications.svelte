<Page name="notifications" class="notifications_page">

    <Block class="notifications_header">
        <Button class="notifications_button" round>{lang('notifications.notifications')}</Button>
        <div class="second_menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Block>

    <List class="notifications_list">
        <ListItem>
            <div class="head">dd.mm.yyyy HH:MM</div>
            <div class="middle">
                <div class="title">
                    <span>{lang('notifications.theme')}: </span>{lang('notifications.new')}
                </div>
                <p>{lang('notifications.message').replace('$count', '3').replace('$id', '1BY264783')}</p>
            </div>
            <div class="foot">
                <Button class="notification_button" round>{lang('notifications.see')}</Button>
            </div>
        </ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'
    import {Page, Block, Button, ListItem, List} from 'framework7-svelte';
    import {api, lang} from '@/js/api'

</script>