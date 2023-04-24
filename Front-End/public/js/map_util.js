async function getRoute(mapObj, dataRoute) {
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
        latlngs.push(L.latLng([element.address.lat, element.address.lon]));
    });
    
    
    latlngs.forEach((e, index) => {
      var marker = new L.Marker(e, {
        icon: new L.NumberedDivIcon({ number: `${index}` }),
      }).addTo(mapObj);
    });
    console.log()
    L.Routing.control({
      waypoints: latlngs,
      createMarker: function () {
        return null;
      },
    }).addTo(mapObj);
    var featureGroup = L.featureGroup(latlngs).addTo(mapObj);
    mapObj.fitBounds(featureGroup.getBounds());
  }
}

async function getDistance(dataRoute) {
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
  let distance = data.solution.distance;
  return distance;
}

export default { getRoute, getDistance };
