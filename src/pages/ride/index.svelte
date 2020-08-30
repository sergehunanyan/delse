<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link href="/add-ride/" class="add_ride">
            <span></span>
            <span></span>
        </Link>

        <div class="header_navigation">
            <a href="/ride/" class="active">Мои поездки</a>
            <a href="/search-ride/">Найти заявки</a>
        </div>

        <div class="second_menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Block>

    <Block class="m-0">
        <List class="my_rides">
            {#each transportations as transportation}
                <ListItem>
                    <div class="ride_block">
                        <div class="ride_from_to_block">
                            <div class="from_to_animation">
                                <div class="animation_element"></div>
                                <div class="a"></div>
                                <div class="b"></div>
                            </div>
                            <div class="ride_from_to">
                                <p>{transportation.place.placeFrom}</p>
                                <p>{transportation.place.placeTo}</p>
                            </div>
                        </div>
                        <div class="ride_dates">
                            <div>
                                <p>МОГУ ЗАБРАТЬ:</p>
                                <p>17.07 - 20.07.2020</p>
                            </div>
                            <div>
                                <p>МОГУ ДОСТАВИТЬ:</p>
                                <p>21.07.2020</p>
                            </div>
                        </div>
                        <div class="info">
                            <p><span>ТИП ГРУЗА: </span>{(FreightTypes.find(x => x.id === transportation.transportation.freightTypeId).name)}</p>
                            <Block class="ride_img_params">
                                <p>
                                    <img src="./static/images/weight.svg" alt="Weight" width="20" height="22">
                                    <span>ВЕС: </span>{transportation.transportation.freight.weight}
                                    кг
                                </p>
                                <p>
                                    <img src="./static/images/sizes.svg" alt="Weight" width="19" height="20">
                                    <span>ГАБАРИТЫ: </span>{transportation.transportation.freight.length}
                                    / {transportation.transportation.freight.width}
                                    / {transportation.transportation.freight.height} м
                                </p>
                            </Block>
                            <p><span>ТИП ТРАНСПОРТА: </span>{(TransportTypes.find(x => x.id === transportation.transportation.serviceTypeId).name)}</p>
                        </div>
                        <div class="bottom">
                            <p><span>Всего заявок: </span>{transportation.offersCount}</p>
                            <Button href="/ride-requests/" round>Посмотреть заявки</Button>
                        </div>
                    </div>
                </ListItem>
            {/each}
        </List>
    </Block>

    <Navigation/>

</Page>

<script>
    import {onMount} from 'svelte';
    import Navigation from '@/components/navigation.svelte'
    import {
        f7,
        Preloader,
        Page,
        Link,
        Block,
        Button,
        Icon,
        List,
        ListItem,
        Toolbar,
        Tabs,
        Tab
    } from 'framework7-svelte';
    import api from '@/js/api'

    let transportations = [];
    let TransportTypes = [];
    let FreightTypes = [];

    async function getTransportTypes(){
        await api.get('types/api/ServiceType/2') // lang_id
                .then((response) => {
                    TransportTypes = response
                })
    }

    async function getFreightTypes(){
        await api.get('types/api/FreightType/2') // lang_id
                .then((response) => {
                    FreightTypes = response
                })
    }

    async function getRides() {
        await api.get('transportations/api/Transportation/GetByCondition?PayloadCount=100&StartPage=1')
                .then((response) => {
                    transportations = response.items
                })
        f7.preloader.hide()
    }

    getTransportTypes()
    getFreightTypes()

    onMount(() => {
        f7.preloader.show()
        getRides()
    });
</script>