var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_AreaOSM1_0 = new ol.format.GeoJSON();
var features_AreaOSM1_0 = format_AreaOSM1_0.readFeatures(json_AreaOSM1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaOSM1_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaOSM1_0.addFeatures(features_AreaOSM1_0);var lyr_AreaOSM1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaOSM1_0, 
                style: style_AreaOSM1_0,
                title: '<img src="styles/legend/AreaOSM1_0.png" /> AreaOSM1'
            });var format_AreaOSM2_1 = new ol.format.GeoJSON();
var features_AreaOSM2_1 = format_AreaOSM2_1.readFeatures(json_AreaOSM2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaOSM2_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaOSM2_1.addFeatures(features_AreaOSM2_1);var lyr_AreaOSM2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaOSM2_1, 
                style: style_AreaOSM2_1,
                title: '<img src="styles/legend/AreaOSM2_1.png" /> AreaOSM2'
            });var format_PointOSM_2 = new ol.format.GeoJSON();
var features_PointOSM_2 = format_PointOSM_2.readFeatures(json_PointOSM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointOSM_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PointOSM_2.addFeatures(features_PointOSM_2);var lyr_PointOSM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PointOSM_2, 
                style: style_PointOSM_2,
                title: '<img src="styles/legend/PointOSM_2.png" /> PointOSM'
            });

lyr_AreaOSM1_0.setVisible(true);lyr_AreaOSM2_1.setVisible(true);lyr_PointOSM_2.setVisible(true);
var layersList = [baseLayer,lyr_AreaOSM1_0,lyr_AreaOSM2_1,lyr_PointOSM_2];
lyr_AreaOSM1_0.set('fieldAliases', {'id': 'Bahaya', });
lyr_AreaOSM2_1.set('fieldAliases', {'id': 'Waspada', });
lyr_PointOSM_2.set('fieldAliases', {'id': 'Posko', });
lyr_AreaOSM1_0.set('fieldImages', {'id': 'WebView', });
lyr_AreaOSM2_1.set('fieldImages', {'id': 'WebView', });
lyr_PointOSM_2.set('fieldImages', {'id': 'WebView', });
lyr_AreaOSM1_0.set('fieldLabels', {'id': 'header label', });
lyr_AreaOSM2_1.set('fieldLabels', {'id': 'header label', });
lyr_PointOSM_2.set('fieldLabels', {'id': 'inline label', });
lyr_PointOSM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});