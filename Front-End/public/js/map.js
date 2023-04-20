//select block
console.log(window.location.search);
const taskCode = window.location.search.substring(4, 12);
console.log(taskCode);

let task_data;
let task = await fetch(`/tasks/getTask/${taskCode}`)
  .then((response) => response.json())
  .then((data) => {
    task_data = data;
  })
  .catch((error) => console.error(error));

let vehicle_id = task_data.collector[0].vehicle;
let vehicle_data;
let vehicle = await fetch(`/vehicles/getVehicle/${vehicle_id}`)
  .then((response) => response.json())
  .then((data) => {
    vehicle_data = data;
  })
  .catch((error) => console.error(error));

async function getRoute(query) {}

const create_route_btn = document.getElementById("get-route");

const dataRoute = {
  vehicles: [
    {
      vehicle_id: vehicle_data.id,
      start_address: vehicle_data.vehicle_info.start_address,
    },
  ],
  vehicle_types: [{ type_id: "custom_vehicle_type", profile: "car" }],
  services: task_data.route,
};

$(document).ready(function () {
  var mapObj = null;
  var defaultCoord = [10.844348, 106.657142]; // coord mặc định, Hà Nội
  var zoomLevel = 15; // zoom level (1-20)
  var mapConfig = {
    attributionControl: false,
    center: defaultCoord,
    zoom: zoomLevel,
  };

  mapObj = L.map("map", mapConfig);

  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mapObj);

  create_route_btn.addEventListener("click", async (e) => {
    const API_KEY_GRAPHOPPER = "da71e902-9d76-4831-8cd2-c87d94403240";
    const query = new URLSearchParams({
      key: API_KEY_GRAPHOPPER,
    }).toString();

    const resp = await fetch(`https://graphhopper.com/api/1/vrp?${query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRoute),
    });

    const data = await resp.json();
    let latlngs = [];
    if (data.solution) {
      data.solution.routes[0].activities.forEach((element) => {
        if (element.type != "end") {
          latlngs.push(L.latLng([element.address.lat, element.address.lon]));
        }
      });
      latlngs.forEach((e, index) => {
        var marker = new L.Marker(e, {
          icon: new L.NumberedDivIcon({ number: `${index}` }),
        }).addTo(mapObj);
      });
      L.Routing.control({
        waypoints: latlngs,
        createMarker: function () {
          return null;
        },
      }).addTo(mapObj);
      var featureGroup = L.featureGroup(latlngs).addTo(mapObj);
      mapObj.fitBounds(featureGroup.getBounds());
    }
  });
});
