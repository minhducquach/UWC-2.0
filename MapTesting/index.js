//select block
async function getRoute(query) {
    
    
      
}

const create_route_btn = document.getElementById("get-route");

//request.json to js object 
const dataRoute = {vehicles:[{vehicle_id:"my_vehicle",start_address:{location_id:"Bãi xe",lon:106.664658,lat:10.847044}}],vehicle_types:[{type_id:"custom_vehicle_type",profile:"car"}],services:[{id:"1",name:"2",address:{location_id:"132 Lê Văn Thọ",lon:106.657142,lat:10.844348}},{id:"2",name:"2",address:{location_id:"435 Lê Đức Thọ",lon:106.674036,lat:10.843802}},{id:"3",name:"3",address:{location_id:"32 Nguyễn Văn Lượng",lon:106.674604,lat:10.838689}},{id:"4",name:"4",address:{location_id:"1043 Lê Đức Thọ",lon:106.661639,lat:10.851777}}]}

$(document).ready(function () {

    var mapObj = null;
    var defaultCoord = [10.844348, 106.657142]; // coord mặc định, Hà Nội
    var zoomLevel = 15; // zoom level (1-20)
    var mapConfig = {
        attributionControl: false,
        center: defaultCoord, 
        zoom: zoomLevel,
    };

    mapObj = L.map('map', mapConfig);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapObj);

    create_route_btn.addEventListener("click", async e => {
        const API_KEY_GRAPHOPPER = "da71e902-9d76-4831-8cd2-c87d94403240"
        const query = new URLSearchParams({
            key: API_KEY_GRAPHOPPER
        }).toString();

        const resp = await fetch(
        `https://graphhopper.com/api/1/vrp?${query}`,
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataRoute)
        }
        );

        const data = await resp.json();
        latlngs = []
        if(data.solution) {
            data.solution.routes[0].activities.forEach(element => {
                if (element.type != 'end') {
                    latlngs.push(L.latLng([element.address.lat, element.address.lon]))
                }
            })
            latlngs.forEach((e,index) => {
                var marker = new L.Marker(e, {
                    icon:   new L.NumberedDivIcon({number: `${index}`})
                }).addTo(mapObj);    
            })
            L.Routing.control({
                waypoints: latlngs,
                createMarker: function() { return null; }
            }).addTo(mapObj);
            var featureGroup = L.featureGroup(latlngs).addTo(mapObj);
            mapObj.fitBounds(featureGroup.getBounds());
        }
    });
})
