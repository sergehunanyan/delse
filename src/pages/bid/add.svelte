<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" href="/bid/">
            <img src="../../static/images/back.svg" alt="Back">
        </Link>

        <div class="header_navigation">
            <a href="/bid/" class="active">Мои заявки</a>
            <a href="/search-bid/">Найти поездки</a>
        </div>
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
                <img src="../../static/images/sizes_white.svg" alt="Sizes">

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

            <textarea name="extra_info" class="extra_info" placeholder="Дополнительная информация о гррузе, особенностях упаковки и деталях доставки"></textarea>

            <div class="add_bid_bottom">
                <select name="payment_type">
                    <option value="0">Способ оплаты:</option>
                    <option value="1">3333 XXXX XXXX 4444</option>
                    <option value="1">5555 XXXX XXXX 6666</option>
                    <option value="1">Наличные</option>
                </select>

                <label>
                    <div class="add_ride">
                        <span></span>
                        <span></span>
                    </div>
                    Добавить фото
                    <Input type="file" class="file_input"/>
                </label>
            </div>

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
        Input,
    } from 'framework7-svelte';

</script>