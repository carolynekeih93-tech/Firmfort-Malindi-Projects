var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_dakacha1042geojson_1 = new ol.format.GeoJSON();
var features_dakacha1042geojson_1 = format_dakacha1042geojson_1.readFeatures(json_dakacha1042geojson_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dakacha1042geojson_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dakacha1042geojson_1.addFeatures(features_dakacha1042geojson_1);
var lyr_dakacha1042geojson_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dakacha1042geojson_1, 
                style: style_dakacha1042geojson_1,
                popuplayertitle: 'dakacha 1042 geojson',
                interactive: true,
                title: '<img src="styles/legend/dakacha1042geojson_1.png" /> dakacha 1042 geojson'
            });
var format_gongoni1028geojson_2 = new ol.format.GeoJSON();
var features_gongoni1028geojson_2 = format_gongoni1028geojson_2.readFeatures(json_gongoni1028geojson_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gongoni1028geojson_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gongoni1028geojson_2.addFeatures(features_gongoni1028geojson_2);
var lyr_gongoni1028geojson_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gongoni1028geojson_2, 
                style: style_gongoni1028geojson_2,
                popuplayertitle: 'gongoni 1028 geojson',
                interactive: true,
                title: '<img src="styles/legend/gongoni1028geojson_2.png" /> gongoni 1028 geojson'
            });
var format_Nearbytowns_places_3 = new ol.format.GeoJSON();
var features_Nearbytowns_places_3 = format_Nearbytowns_places_3.readFeatures(json_Nearbytowns_places_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nearbytowns_places_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nearbytowns_places_3.addFeatures(features_Nearbytowns_places_3);
var lyr_Nearbytowns_places_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nearbytowns_places_3, 
                style: style_Nearbytowns_places_3,
                popuplayertitle: 'Nearby towns_places',
                interactive: true,
                title: '<img src="styles/legend/Nearbytowns_places_3.png" /> Nearby towns_places'
            });
var format_roadsmagharini_4 = new ol.format.GeoJSON();
var features_roadsmagharini_4 = format_roadsmagharini_4.readFeatures(json_roadsmagharini_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadsmagharini_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadsmagharini_4.addFeatures(features_roadsmagharini_4);
var lyr_roadsmagharini_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roadsmagharini_4, 
                style: style_roadsmagharini_4,
                popuplayertitle: 'roads magharini',
                interactive: false,
                title: '<img src="styles/legend/roadsmagharini_4.png" /> roads magharini'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_dakacha1042geojson_1.setVisible(true);lyr_gongoni1028geojson_2.setVisible(true);lyr_Nearbytowns_places_3.setVisible(true);lyr_roadsmagharini_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_dakacha1042geojson_1,lyr_gongoni1028geojson_2,lyr_Nearbytowns_places_3,lyr_roadsmagharini_4];
lyr_dakacha1042geojson_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area_in_Acres': 'Area_in_Acres', 'plot_no': 'plot_no', 'Status': 'Status', 'Land_use': 'Land_use', 'Location': 'Location', });
lyr_gongoni1028geojson_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Area_in_Ha': 'Area_in_Ha', 'Ploto_no': 'Ploto_no', 'Status': 'Status', 'Land_use': 'Land_use', 'Location': 'Location', });
lyr_Nearbytowns_places_3.set('fieldAliases', {'id': 'id', 'Town_Name': 'Town_Name', });
lyr_roadsmagharini_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'service': 'service', 'motor_vehi': 'motor_vehi', 'width': 'width', 'access': 'access', 'source_geo': 'source_geo', 'complete': 'complete', 'layer': 'layer', 'bridge': 'bridge', 'tracktype': 'tracktype', 'surface': 'surface', 'AUTO_ID': 'AUTO_ID', 'name': 'name', 'maxspeed': 'maxspeed', 'ref': 'ref', 'oneway': 'oneway', 'junction': 'junction', });
lyr_dakacha1042geojson_1.set('fieldImages', {'OBJECTID': 'Range', 'Area_in_Acres': 'TextEdit', 'plot_no': 'TextEdit', 'Status': 'TextEdit', 'Land_use': 'TextEdit', 'Location': 'TextEdit', });
lyr_gongoni1028geojson_2.set('fieldImages', {'OBJECTID': 'Range', 'Area_in_Ha': 'TextEdit', 'Ploto_no': 'Range', 'Status': 'TextEdit', 'Land_use': 'TextEdit', 'Location': 'TextEdit', });
lyr_Nearbytowns_places_3.set('fieldImages', {'id': 'TextEdit', 'Town_Name': 'TextEdit', });
lyr_roadsmagharini_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'service': 'TextEdit', 'motor_vehi': 'TextEdit', 'width': 'TextEdit', 'access': 'TextEdit', 'source_geo': 'TextEdit', 'complete': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tracktype': 'TextEdit', 'surface': 'TextEdit', 'AUTO_ID': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'junction': 'TextEdit', });
lyr_dakacha1042geojson_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'Area_in_Acres': 'inline label - visible with data', 'plot_no': 'inline label - always visible', 'Status': 'inline label - visible with data', 'Land_use': 'inline label - visible with data', 'Location': 'inline label - visible with data', });
lyr_gongoni1028geojson_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Area_in_Ha': 'inline label - visible with data', 'Ploto_no': 'inline label - always visible', 'Status': 'header label - visible with data', 'Land_use': 'inline label - visible with data', 'Location': 'inline label - visible with data', });
lyr_Nearbytowns_places_3.set('fieldLabels', {'id': 'no label', 'Town_Name': 'inline label - always visible', });
lyr_roadsmagharini_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'service': 'no label', 'motor_vehi': 'no label', 'width': 'no label', 'access': 'no label', 'source_geo': 'no label', 'complete': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'AUTO_ID': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'ref': 'no label', 'oneway': 'no label', 'junction': 'no label', });
lyr_roadsmagharini_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});