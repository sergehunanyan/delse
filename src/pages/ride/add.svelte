<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link class="back_to_user" onClick={() => f7router.back()}>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none"
                 width="18" height="18">
                <path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/>
            </svg>
        </Link>

        <div class="header_navigation">
            <a href="/ride/" class="active">Мои поездки</a>
            <a href="/search-ride/">Найти заявки</a>
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
                <Button fill popupOpen=".demo-popup" class="open_map">
                    <img src="./static/images/location.svg" alt="Location">
                </Button>
            </div>

            <Popup class="demo-popup" opened={popupOpened} onPopupClosed={() => popupOpened = false}>
                <Page>
                    <Navbar>
                        <NavRight>
                            <Link popupClose>Закрыть</Link>
                        </NavRight>
                    </Navbar>
                    <Block style="height:100%;margin:0;padding:0;">
                        <div id="map" style="width: 600px; min-height: 100%;"></div>
                    </Block>
                </Page>
            </Popup>

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
                <Button href="/ride/" class="add_ride_button" round>Добавить поездку</Button>
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
        Popup,
        Navbar,
        NavRight,
    } from 'framework7-svelte';

    ymaps.ready(init);

    function init() {
        let inputSearch = new ymaps.control.SearchControl({
            options: {
                size: 'large',
                provider: 'yandex#search'
            }
        });

        let myPlacemark,
                myMap = new ymaps.Map("map", {
                    center: [55.76, 37.64],
                    zoom: 7,
                    controls: ['zoomControl', 'geolocationControl', inputSearch],
                });

        myMap.events.add('click', function (e) {
            let coords = e.get('coords');
            if (myPlacemark) {
                myPlacemark.geometry.setCoordinates(coords);
            }
            else {
                myPlacemark = createPlacemark(coords);
                myMap.geoObjects.add(myPlacemark);
                myPlacemark.events.add('dragend', function () {
                    getAddress(myPlacemark.geometry.getCoordinates());
                });
            }
            console.log(coords)
            console.log(coords[0].toPrecision(6))
            console.log(coords[1].toPrecision(6))
            getAddress(coords);
        });

        function createPlacemark(coords) {
            return new ymaps.Placemark(coords, {
                iconCaption: 'поиск...'
            }, {
                preset: 'islands#violetDotIconWithCaption',
                draggable: true
            });
        }

        function getAddress(coords) {
            myPlacemark.properties.set('iconCaption', 'поиск...');
            ymaps.geocode(coords).then(function (res) {
                let firstGeoObject = res.geoObjects.get(0);
                myPlacemark.properties.set({
                    iconCaption: [
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    balloonContent: firstGeoObject.getAddressLine()
                });
            });
        }

    }

    export let f7router;

    let popupOpened = false;


</script>