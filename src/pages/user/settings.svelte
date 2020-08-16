<Page name="user_settings" class="user_settings_page">

    <UserInfo/>

    <ProfileHeading heading="Настройки"/>

    <List simpleList class="user_settings_list">
        <ListItem>
            <span>Разешить уведомления</span>
            <Toggle color="green"></Toggle>
        </ListItem>
        <ListItem>
            <span>Выбрать язык</span>
            <select name="language" id="language">
                <option value="ru">Русский</option>
                <option value="en">Английский</option>
            </select>
        </ListItem>
        <ListItem>
            <Link href="/password/">Изменить пароль</Link>
        </ListItem>
        <ListItem>Удалить аккаунт</ListItem>
    </List>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'
    import UserInfo from '../../components/UserInfo.svelte'
    import ProfileHeading from '../../components/profileHeading.svelte'

    import {
        Page,
        List,
        ListItem,
        Toggle,
        Link,
    } from 'framework7-svelte';
</script>