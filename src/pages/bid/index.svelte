<Page name="ride" class="rides_page">

    <Block class="rides_header">
        <Link href="/add-bid/" class="add_ride">
            <span></span>
            <span></span>
        </Link>

        <div class="header_navigation">
            <a href="/bid/" class="active">Мои заявки</a>
            <a href="/search-bid/">Найти поездки</a>
        </div>

        <div class="second_menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Block>

    <Block class="m-0">
        <List class="my_rides">
            {#each bids as bid}
<!--                <ListItem>-->
<!--                    <div class="ride_block">-->
<!--                        <div class="ride_from_to_block">-->
<!--                            <div class="from_to_animation">-->
<!--                                <div class="animation_element"></div>-->
<!--                                <div class="a"></div>-->
<!--                                <div class="b"></div>-->
<!--                            </div>-->
<!--                            <div class="ride_from_to">-->
<!--                                <p>{transportation.place.placeFrom}</p>-->
<!--                                <p>{transportation.place.placeTo}</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="ride_dates">-->
<!--                            <div>-->
<!--                                <p>МОГУ ЗАБРАТЬ:</p>-->
<!--                                <p>17.07 - 20.07.2020</p>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <p>МОГУ ДОСТАВИТЬ:</p>-->
<!--                                <p>21.07.2020</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="info">-->
<!--                            <p><span>ТИП ГРУЗА: </span>{(FreightTypes.find(x => x.id === transportation.transportation.freightTypeId).name)}</p>-->
<!--                            <Block class="ride_img_params">-->
<!--                                <p>-->
<!--                                    <img src="./static/images/weight.svg" alt="Weight" width="20" height="22">-->
<!--                                    <span>ВЕС: </span>{transportation.transportation.freight.weight}-->
<!--                                    кг-->
<!--                                </p>-->
<!--                                <p>-->
<!--                                    <img src="./static/images/sizes.svg" alt="Weight" width="19" height="20">-->
<!--                                    <span>ГАБАРИТЫ: </span>{transportation.transportation.freight.length}-->
<!--                                    / {transportation.transportation.freight.width}-->
<!--                                    / {transportation.transportation.freight.height} м-->
<!--                                </p>-->
<!--                            </Block>-->
<!--                            <p><span>ТИП ТРАНСПОРТА: </span>{(TransportTypes.find(x => x.id === transportation.transportation.serviceTypeId).name)}</p>-->
<!--                        </div>-->
<!--                        <div class="bottom">-->
<!--                            <p><span>Всего заявок: </span>{transportation.offersCount}</p>-->
<!--                            <Button href="/ride-requests/" round>Посмотреть заявки</Button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </ListItem>-->
                <ListItem>
                    <div class="ride_block">
                        <div class="ride_from_to_block">
                            <div class="from_to_animation">
                                <div class="animation_element"></div>
                                <div class="a"></div>
                                <div class="b"></div>
                            </div>
                            <div class="ride_from_to">
                                <p>{ bid.place.placeFrom}</p>
                                <p>{ bid.place.placeTo}</p>
                            </div>
                        </div>
                        <div class="ride_dates">
                            <div>
                                <p>НУЖНО ЗАБРАТЬ:</p>
                                <p>17.07 - 20.07.2020</p>
                            </div>
                            <div>
                                <p>НУЖНО ДОСТАВИТЬ:</p>
                                <p>21.07.2020</p>
                            </div>
                        </div>
                        <div class="info">
                            <p><span>НАИМЕНОВАНИЕ: </span>{ bid.application.name }</p>
                            <p>
                                <span>ТИП ГРУЗА: </span>
                                {#if FreightTypes.find(x => x.id === bid.application.freightTypeId)}
                                    {(FreightTypes.find(x => x.id === bid.application.freightTypeId).name)}
                                {/if}
                            </p>
                            <Block class="ride_img_params">
                                <p><img src="./static/images/weight.svg" alt="Weight" width="20"
                                        height="22"><span>ВЕС: </span>{ bid.application.freight.weight} кг</p>
                                <p><img src="./static/images/sizes.svg" alt="Weight" width="19"
                                        height="20"><span>ГАБАРИТЫ: </span>{bid.application.freight.length}
                                    / {bid.application.freight.width}
                                    / {bid.application.freight.height} м</p>
                            </Block>
                            <p><span>СПОСОБ ОПЛАТЫ: </span>1111 XXXX XXXX 4444 <img src="./static/images/visa.svg" alt="VISA" width="19" height="20"></p>
                            <div class="ride_extra_info">{ bid.additionalInfo }</div>
                            <div class="info_image">
                                <img src="./static/images/photo.svg" alt="Weight" width="20" height="22">
                                <span>Посмотреть фото</span>
                                <div class="full_image" style="background-image: url(./static/images/example.png)">
                                    <div class="close">X</div>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <p><span>Всего предложений: </span>{ bid.offersCount }</p>
                            <Button href="/bid-requests/" round>Посмотреть предложения</Button>
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
        Page,
        Link,
        Block,
        Button,
        Icon,
        List,
        ListItem
    } from 'framework7-svelte';
    import api from '@/js/api'

    let bids = [];
    let FreightTypes = [];

    async function getFreightTypes(){
        await api.get('types/api/FreightType/2') // lang_id
                .then((response) => {
                    FreightTypes = response
                })
    }

    async function getBids() {
        await api.get('applications/api/Application/GetByCondition?PayloadCount=100&StartPage=1')
                .then((response) => {
                    bids = response.items
                })
        f7.preloader.hide()
    }
    // api.get('filemanager/api/FileManager/id?id=1')
    //         .then((response) => {
    //             console.log(response)
    //         })

    getFreightTypes()

    onMount(() => {
        f7.preloader.show()
        getBids()
    });
</script>