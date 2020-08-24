<Page name="notifications" class="notifications_page">

    <Block class="notifications_header">
        <Button class="notifications_button" round>Уведомления</Button>
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
                    <span>Тема: </span>Новые предложения
                </div>
                <p>У Вас 3 новых прредложения по заявке ID 1BY264783</p>
            </div>
            <div class="foot">
                <Button class="notification_button" round>Посмотреть</Button>
            </div>
        </ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'

    import {
        Page,
        Link,
        Block,
        Button,
        ListItem,
        List,
    } from 'framework7-svelte';

</script>