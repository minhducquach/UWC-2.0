//select block
import mapUtil from "./map_util.js";

// console.log(window.location.search);
// const taskCode = window.location.search.substring(4, 12);
// console.log(taskCode);

console.log(window.location.search);
const taskCode = new URLSearchParams(window.location.search).get("id");
const insertIDTask = `<div class="title_list">Xem chi tiết công việc</div>
<a href="/tasks/generalInfo?id=${taskCode}" class="item_nav">Thông tin tổng quan</a>
<a href="/tasks/Staff?id=${taskCode}" class="item_nav">Danh sách nhân
viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav">Danh sách điểm thu gom</a>
<a href="./route?id=${taskCode}" class="item_nav" style="background-color: #007777; color: #ffff">Tuyến đường di
chuyển</a>`;
document.querySelector(".view_detail").innerHTML = insertIDTask;
const insertIDUpdate = `
<div class="title_list">Chỉnh sửa công việc</div>
<a class="item_nav update-task-link" href="/tasks/updateTask?id=${taskCode}">Chỉnh sửa công việc</a>
<button id="delete" class = "item_nav"style = "color: #d82f2f;">Xóa công việc</button>
`;
document.querySelector(".update-task").innerHTML = insertIDUpdate;
document.querySelector(".route-title").innerText = "Tuyến đường thu gom cho " + taskCode;
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

// async function getRoute(query) {}

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
  mapUtil.getRoute(mapObj, dataRoute);
});

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  if (confirm("Bạn có chắc muốn xóa công việc này ?") == true) {
    await fetch(`/tasks/deleteTask/${taskCode}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Xóa công việc thành công");
    window.location.href = "/tasks";
  }
});
