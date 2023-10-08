
		 // Creating map options
         var mapOptions = {
            center: [7.1164, 171.1854],
            zoom: 9, minZoom: 7, maxZoom: 17
         }
         
         // Creating a map object
         var map = new L.map('map', mapOptions,{
         	zoomSnap: 0.25
         });

         map.createPane('labels');

//'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'

var layers = new L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: '© Esri - World Topo Map',
    maxZoom: 19
}).addTo(map);


         var mhl_0 = L.geoJSON(mhl_0);
         var mhl_1 = L.geoJSON(mhl_1);
         var mhl_2 = L.geoJSON(mhl_2);

		// creating map color

         var myStyle_0 = {
			"fillColor": "#418FDE",
			"weight": 0.75,
			"color":'#418FDE',
			"fillOpacity": 1
			}; 

			var myStyle_1 = {
			"fillColor": "#FFB18C",
			"weight": 0.75,
			"color":'#FFB18C',
			"fillOpacity": 1
			}; 

			var myStyle_2 = {
			"fillColor": "#5CB8B2",
			"weight": 0.75,
			"color":'#5CB8B2',
			"fillOpacity": 1
			}; 

	var mhl_0 = L.geoJSON(null, { style: { color: 'blue' } });

var mhl_1 = L.geoJSON(null, {
    style: { color: 'green' },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindTooltip(feature.properties.name, { sticky: true }).openTooltip();
        }
    }
});
var mhl_2 = L.geoJSON(null, {
    style: { color: 'yellow' },
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindTooltip(feature.properties.name, { sticky: true }).openTooltip();
        }
    }
});
        
        
         var overlayMaps = {
    'Country': mhl_0,
    'Atoll': mhl_1,
    'Community': mhl_2
};

// Add a control to switch between base maps and overlay layers
L.control.layers(null, overlayMaps,{position:'bottomright'}).addTo(map);

       
	// reset function
	function resetAll(){
		map.setView([7.1164, 171.1854], 8)
		}
	// activating reset button	
	$(document).ready(function(){	
		$(document).on("click", "#reset-map", function(){
		resetAll();
	});
	});



