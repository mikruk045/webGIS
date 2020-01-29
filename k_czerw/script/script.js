

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch",
    "esri/layers/FeatureLayer"
  ], function(Map, MapView, BasemapToggle, BasemapGallery, Expand, GraphicsLayer, Sketch, FeatureLayer){
    /*let topo = document.getElementById("topo");
    let sat = document.getElementById("sat");
    let OSM = document.getElementById("OSM");
    let agol = document.getElementById("agol")

    let webmap = new WebMap({portalItem: {id: "131eb8b1a13640ddbb38049cd88941c1"}});
    let map1 = new Map({basemap:'topo'}); //słowo klucz new + nazwa modułu
    let map2 = new Map({basemap:'satellite'});
    let map3 = new Map({basemap:'osm'});*/
    
    let graphicsLayer = new GraphicsLayer();

    var trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
      });

    let map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
      });
    
    map.add(trailheadsLayer);
    
    let view = new MapView({
        container: "itemMap",
        map: map,
        center: [22.34, 51.15],
        zoom: 10
      });
    
    let sketch = new Sketch({
        view: view,
        layer: graphicsLayer
      });

    view.ui.add(sketch, "top-right");

    let basemapGallery = new BasemapGallery({
        view: view,
        container: document.createElement("div"),
        source: {
            portal: {
                url:"https://www.arcgis.com",
                useVectorBasemaps: true
            },
        }
    });

    let bgExpand = new Expand({
        view: view,
        content: basemapGallery.domNode
      });

    view.ui.add(bgExpand, "top-right");
});

    /*let basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "satellite"
      });
      view.ui.add(basemapToggle, "bottom-right");*/

    /*topo.addEventListener("click",function(){
        mapContainer.map = map1;
    });

    sat.addEventListener("click",function(){
        mapContainer.map = map2;
    });

    OSM.addEventListener("click",function(){
        mapContainer.map = map3;
    });

    agol.addEventListener("click", function(){
        mapContainer.map = webmap;
    });*/

    /*let mapContainer = new MapView({
        container: "itemMap", //miejsce gdzie chcemy osadzić mapę (klasa z pliku html)
        map: map1, //nasza zmienna z mapą bazową zdefiniowaną wcześniej
        zoom: 10,
        center: [22.34, 51.15]
    });*/

