var mymap = L.map('mapid').setView([40.7128, -74.0060], 13);

// tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    zoom: 11,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(mymap);


var greenIcon = L.icon({
    iconUrl: '/Users/emanshupatel/code/Group_A_Project_2/static/images/iconfinder_Location_05_1530089 (2).png',    
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



// read in latitudes and longitudes from /locations routes
locationUrl = '/locations'
d3.json(locationUrl).then(function (data) {

    console.log(data)

    for (m = 0; m < data.length; m++) {

        var greenIcon = L.icon({
            iconUrl: 'https://img.icons8.com/ios/30/000000/city-railway-station.png',    
            iconSize:     [15, 15], // size of the icon
            // shadowSize:   [50, 64], // size of the shadow
            // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            // shadowAnchor: [4, 62],  // the same for the shadow
            // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        
        var marker = L.marker([data[m][0], data[m][1]], {icon: greenIcon})
            .addTo(mymap)

        // assign variables to data points
        var line = data[m][4];
        var stopName = data[m][3];
        var division = data[m][2];


        var popup = marker.bindTooltip(`<p>Line-${line}</p><hr><p>Stop-${stopName}</p><hr><p>Divsion-${division}`).openTooltip()

        // myDataPoint.bindPopup("<h3>Kendall Square</h3><p>Cambridge, MA<br>Information about Kendall Square.</p>");


    }




})