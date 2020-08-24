<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
        </Link>

        <div class="header_navigation">
            <a href="/bid/">Мои заявки</a>
            <a href="/search-bid/" class="active">Найти поездки</a>
        </div>
    </Block>

    <Block class="m-0">
        <form class="add_form">
            <div class="ride_from">
                <Input type="text" placeholder="Откуда:"/>
                <img src="./static/images/location.svg" alt="Location">
            </div>

            <div class="ride_from">
                <Input type="text" placeholder="Куда:"/>
                <img src="./static/images/location.svg" alt="Location">
            </div>

            <div class="ride_dates">
                <div>
                    <p>НУЖНО ЗАБРАТЬ:</p>
                    <Input type="text" placeholder="dd.mm - dd.mm.yyyy"/>
                </div>
                <div>
                    <p>НУЖНО ДОСТАВИТЬ:</p>
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

            <select name="payment">
                <option value="0">Способ оплаты:</option>
                <option value="1">Наличными</option>
                <option value="2">Карта</option>
            </select>

            <div class="add_weight">
                <div class="add_weight_block">
                    <label for="ride_weight">Вес:<Input type="text" id="ride_weight"/></label>
                    <select name="weight">
                        <option value="0">г</option>
                        <option value="1">кг</option>
                        <option value="2">т</option>
                    </select>
                </div>

                <div class="add_weight_block">
                    <label for="ride_size">Объём:<Input type="text" id="ride_size"/></label>
                    <p>м3</p>
                </div>
            </div>

            <div class="add_sizes">
                <img src="./static/images/sizes_white.svg" alt="Sizes">

                <div class="add_sizes_middle">
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>длина</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>ширина</p>
                    </div>
                    <span>/</span>
                    <div class="add_sizes_middle_block">
                        <Input type="text"/>
                        <p>высота</p>
                    </div>
                </div>

                <select name="size_type" class="size_type">
                    <option value="0">см</option>
                    <option value="1">м</option>
                </select>
            </div>

            <Block class="login_button_block">
                <Button href="/bid-results/" class="add_ride_button" round>Найти поездки</Button>
            </Block>
        </form>
    </Block>

    <Navigation/>

</Page>

<script>
    import Navigation from '@/components/navigation.svelte'

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

    export let f7router;
</script>