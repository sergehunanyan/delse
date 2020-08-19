<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" href="/ride/">
            <img src="../../static/images/back.svg" alt="Back">
        </Link>

        <Toolbar tabbar class="ride_tabs">
            <Link tabLink tabLinkActive>Мои поездки</Link>
            <Link tabLink>Найти заявки</Link>
        </Toolbar>
    </Block>

    <Block class="m-0">
        <form class="add_form">
            <div class="ride_from">
                <Input type="text" placeholder="Откуда:"/>
                <img src="../../static/images/location.svg" alt="Location">
            </div>

            <div class="ride_from">
                <Input type="text" placeholder="Куда:"/>
                <img src="../../static/images/location.svg" alt="Location">
            </div>

            <div class="ride_dates">
                <div>
                    <p>МОГУ ЗАБРАТЬ:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
                <div>
                    <p>МОГУ ДОСТАВИТЬ:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
            </div>

            <select name="type">
                <option value="0">Тип груза:</option>
                <option value="1">Бумаги/документы</option>
                <option value="2">Мелкогабаритные</option>
                <option value="3">Среднегабаритные</option>
                <option value="4">Крупногабаритные</option>
                <option value="5">Наливные</option>
                <option value="6">Сыпучие</option>
                <option value="7">Низкотемпературные</option>
                <option value="8">Мусор и отходы</option>
            </select>

            <select name="transport">
                <option value="0">Тип транспорта:</option>
                <option value="1">Вело/Мото</option>
                <option value="2">Поезд</option>
                <option value="3">Легковой автомобиль</option>
                <option value="4">Минивэн</option>
                <option value="5">Микроавтобус</option>
                <option value="6">Грузовой автомобиль</option>
                <option value="7">Самолёт</option>
            </select>

            <select name="weight">
                <option value="0">г</option>
                <option value="1">кг</option>
                <option value="2">т</option>
            </select>

            <select name="size_type" class="size_type">
                <option value="0">см</option>
                <option value="1">м</option>
            </select>

            <Input type="text" placeholder="Вес:"/>

            <Input type="text" placeholder="Объём:"/>

            <Block class="login_button_block">
                <Button href="/ride/" class="add_ride_button" round>Добавить поездку</Button>
            </Block>
        </form>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '../../components/navigation.svelte'

    import {
        Page,
        Link,
        Block,
        Button,
        Icon,
        List,
        ListItem,
        Toolbar,
        Input,
    } from 'framework7-svelte';

</script>