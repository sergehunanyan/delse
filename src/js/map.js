export default function newMap(input_id, map_id, long_id, lat_id) {
    ymaps.ready(init);

    function init() {
        new ymaps.SuggestView(input_id);
        // let myGeocoder = ymaps.geocode('London ');
        // myGeocoder.then(
        //     function (res) {
        //         let coords = res.geoObjects.get(0).geometry.getCoordinates();
        //         console.log(coords)
        //         let myGeocoder = ymaps.geocode(coords, {kind: 'street'});
        //         myGeocoder.then(
        //             function (res) {
        //                 let street = res.geoObjects.get(0);
        //                 let name = street.properties.get('name'); // address
        //             }
        //         );
        //     });

        let inputSearch = new ymaps.control.SearchControl({
            options: {
                size: 'large',
                provider: 'yandex#search'
            }
        });
        let myPlacemark,
            myMap = new ymaps.Map(map_id, {
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
            document.getElementById(long_id).value = coords[0].toPrecision(6);
            document.getElementById(lat_id).value = coords[1].toPrecision(6);
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
                document.getElementById(input_id).value =firstGeoObject.getAddressLine();
            });
        }
    }
}