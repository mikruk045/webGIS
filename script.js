
require(["esri/Map", "esri/views/MapView"], function(Map, MapView){
    let map1 = new Map({basemap:'topo'}); //słowo klucz new + nazwa modułu
    let mapContainer = new MapView({
        container: "itemMap", //miejsce gdzie chcemy osadzić mapę (klasa z pliku html)
        map: map1, //nasza zmienna z mapą bazową zdefiniowaną wcześniej
        zoom: 10,
        center: [22.34, 51.15]
    })
})