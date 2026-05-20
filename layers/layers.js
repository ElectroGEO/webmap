var wms_layers = [];


        var lyr_Googlesatellite2_0 = new ol.layer.Tile({
            'title': 'Google satellite 2',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PuenteAlto_1 = new ol.format.GeoJSON();
var features_PuenteAlto_1 = format_PuenteAlto_1.readFeatures(json_PuenteAlto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteAlto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteAlto_1.addFeatures(features_PuenteAlto_1);
var lyr_PuenteAlto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteAlto_1, 
                style: style_PuenteAlto_1,
                popuplayertitle: 'Puente Alto',
                interactive: true,
                title: '<img src="styles/legend/PuenteAlto_1.png" /> Puente Alto'
            });
var format_LaFlorida_2 = new ol.format.GeoJSON();
var features_LaFlorida_2 = format_LaFlorida_2.readFeatures(json_LaFlorida_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaFlorida_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaFlorida_2.addFeatures(features_LaFlorida_2);
var lyr_LaFlorida_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaFlorida_2, 
                style: style_LaFlorida_2,
                popuplayertitle: 'LaFlorida',
                interactive: true,
                title: '<img src="styles/legend/LaFlorida_2.png" /> LaFlorida'
            });
var format_ObrasProyectadas_3 = new ol.format.GeoJSON();
var features_ObrasProyectadas_3 = format_ObrasProyectadas_3.readFeatures(json_ObrasProyectadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ObrasProyectadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ObrasProyectadas_3.addFeatures(features_ObrasProyectadas_3);
var lyr_ObrasProyectadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ObrasProyectadas_3, 
                style: style_ObrasProyectadas_3,
                popuplayertitle: 'Obras Proyectadas',
                interactive: true,
    title: 'Obras Proyectadas<br />\
    <img src="styles/legend/ObrasProyectadas_3_0.png" /> Cámara de inspección<br />\
    <img src="styles/legend/ObrasProyectadas_3_1.png" /> Cámara especial<br />\
    <img src="styles/legend/ObrasProyectadas_3_2.png" /> Captación<br />\
    <img src="styles/legend/ObrasProyectadas_3_3.png" /> Colector<br />\
    <img src="styles/legend/ObrasProyectadas_3_4.png" /> Conexión colector existente<br />\
    <img src="styles/legend/ObrasProyectadas_3_5.png" /> Conexión sumidero<br />\
    <img src="styles/legend/ObrasProyectadas_3_6.png" /> Descarga<br />\
    <img src="styles/legend/ObrasProyectadas_3_7.png" /> Dirección<br />\
    <img src="styles/legend/ObrasProyectadas_3_8.png" /> Eje<br />\
    <img src="styles/legend/ObrasProyectadas_3_9.png" /> Mejoramiento terreno<br />\
    <img src="styles/legend/ObrasProyectadas_3_10.png" /> Sumidero<br />\
    <img src="styles/legend/ObrasProyectadas_3_11.png" /> Talud<br />\
    <img src="styles/legend/ObrasProyectadas_3_12.png" /> Tunnel liner<br />\
    <img src="styles/legend/ObrasProyectadas_3_13.png" /> Ventilación<br />' });
var group_Proyectadolineas = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Proyectado-lineas'});
var group_Colectores = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Colectores'});
var group_RedHidro = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Red Hidro'});
var group_muestreocalidadagua = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'muestreo calidad agua'});
var group_Otros = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Otros'});
var group_Calicatas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Calicatas'});
var group_ObrasProyectadas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Obras Proyectadas'});
var group_Tramos = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tramos'});
var group_Factibilidad2017 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Factibilidad 2017'});
var group_reasProtegidas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Áreas Protegidas'});
var group_CENSO2024 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CENSO 2024'});
var group_MedioFsico = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Medio Físico'});
var group_MedioSocialHumano = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Medio Social Humano'});
var group_PRC = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRC'});
var group_Calles = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Calles'});
var group_JERARQUIACALLE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'JERARQUIA CALLE'});

lyr_Googlesatellite2_0.setVisible(true);lyr_PuenteAlto_1.setVisible(true);lyr_LaFlorida_2.setVisible(true);lyr_ObrasProyectadas_3.setVisible(true);
var layersList = [lyr_Googlesatellite2_0,lyr_PuenteAlto_1,lyr_LaFlorida_2,lyr_ObrasProyectadas_3];
lyr_PuenteAlto_1.set('fieldAliases', {'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'DESC_REGIO': 'DESC_REGIO', 'DESC_PROVI': 'DESC_PROVI', 'DESC_COMUN': 'DESC_COMUN', });
lyr_LaFlorida_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ObrasProyectadas_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Largo': 'Largo', });
lyr_PuenteAlto_1.set('fieldImages', {'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'DESC_REGIO': '', 'DESC_PROVI': '', 'DESC_COMUN': '', });
lyr_LaFlorida_2.set('fieldImages', {'CUT_REG': '', 'CUT_PROV': '', 'CUT_COM': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'SUPERFICIE': '', });
lyr_ObrasProyectadas_3.set('fieldImages', {'fid': '', 'Layer': '', 'Largo': '', });
lyr_PuenteAlto_1.set('fieldLabels', {'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'DESC_REGIO': 'no label', 'DESC_PROVI': 'no label', 'DESC_COMUN': 'no label', });
lyr_LaFlorida_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_ObrasProyectadas_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Largo': 'no label', });
lyr_ObrasProyectadas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});