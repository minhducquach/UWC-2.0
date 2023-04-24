// Data for dropdown select lists
/*
const startDates =[
   "15-04-2023",
   "16-04-2023",
   "17-04-2023",
   "18-4-2023",
   "19-4-2023",
   "20-4-2023",
   "21-4-2023",
   "22-4-2023",
   "23-4-2023",
   "24-4-2023",
   "25-4-2023",
];
*/

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const startTimes = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const endTimes = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const currentDate = new Date();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");
const year = currentDate.getFullYear();
const hour = currentDate.getHours().toString().padStart(2, "0");
const minute = currentDate.getMinutes();
const formattedDate = `${year}/${month}/${day}`;
const formattedHour = `${hour}:${minute.toString().padStart(2, "0")}`;

const areas = ["Quận Gò Vấp"];

let mcps = [];
let vehicles = [];
let janitors = [];
let collectors = [];
let states = [0, 1, 2];
async function getData() {
  let mcp = await fetch("/mcps/getAllMCPs")
    .then((response) => response.json())
    .then((data) => {
      mcps = data;
    })
    .catch((error) => console.error(error));

  let vehicle = await fetch("/vehicles/getAllVehicles")
    .then((response) => response.json())
    .then((data) => {
      vehicles = data;
    })
    .catch((error) => console.error(error));

  let jan = await fetch("/staffs/getAllJanitors")
    .then((response) => response.json())
    .then((data) => {
      janitors = data;
    })
    .catch((error) => console.error(error));

  let col = await fetch("/staffs/getAllCollectors")
    .then((response) => response.json())
    .then((data) => {
      collectors = data;
    })
    .catch((error) => console.error(error));
}
async function postTask() {
  await fetch("/tasks/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(TaskSelect),
  });
}

await getData();
// console.log(mcps);
const TaskSelect = {};
// Get references to form elements
const startDateSelect = document.getElementById("start-date");
const startTimeSelect = document.getElementById("start-time");
const endTimeSelect = document.getElementById("end-time");
const areaSelect = document.getElementById("area");
const mcpSelect = document.getElementById("mcps");
const trolleySelect = document.getElementById("trolleys");
const collectorSelect = document.getElementById("collectors");
const truckSelect = document.getElementById("trucks");
const janitorSelect = document.getElementById("janitors");
const descriptionInput = document.getElementById("description-input");
const taskState = document.getElementById("state");
/*
function clickbutton(){
  var result = confirm("Bạn có muốn thêm công việc?");
    if (result) {
        window.location.href = "/Front-end/tasks-management.html";
    } else {
        alert("Bạn có thể chỉnh sửa thông tin công việc");
    }
}
*/
// var select = document.getElementById("mySelect");
/*
var month = 1; // Change this to the month you want to populate the dropdown with
var year = new Date().getFullYear(); // Get the current year

for (var i = 1; i <= getDaysInMonth(month, year); i++) {
  var day = ("0" + i).slice(-2);
  var option = document.createElement("option");
  option.text = day + "/" + month + "/" + year;
  startDateSelect.add(option);
}

function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
*/
/*
startDates.forEach((date) => {
  const option = document.createElement("option");
  option.value = date;
  option.text = date;
  startDateSelect.appendChild(option);
});
*/
startTimes.forEach((time) => {
  const option = document.createElement("option");
  option.value = time;
  option.text = time;
  startTimeSelect.appendChild(option);
});

endTimes.forEach((time) => {
  const option = document.createElement("option");
  option.value = time;
  option.text = time;
  endTimeSelect.appendChild(option);
});

areas.forEach((area) => {
  const option = document.createElement("option");
  option.value = area;
  option.text = area;
  areaSelect.append(option);
});

mcps.forEach((mcp) => {
  const option = document.createElement("option");
  option.value = mcp.id;
  option.text = mcp.id + ", " + mcp.address.location_id;
  mcpSelect.appendChild(option);
});

vehicles.forEach((vehicle) => {
  if (vehicle.id.slice(0, 2) == "TR") {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.text = vehicle.id;
    trolleySelect.appendChild(option);
  }
});

collectors.forEach((collector) => {
  const option = document.createElement("option");
  option.value = collector.id;
  option.text = collector.id + ", " + collector.name;
  collectorSelect.appendChild(option);
});

vehicles.forEach((vehicles) => {
  if (vehicles.id.slice(0, 2) == "TK") {
    const option = document.createElement("option");
    option.value = vehicles.id;
    option.text = vehicles.id;
    truckSelect.appendChild(option);
  }
});

janitors.forEach((janitor) => {
  const option = document.createElement("option");
  option.value = janitor.id;
  option.text = janitor.id + ", " + janitor.name;
  janitorSelect.appendChild(option);
});
states.forEach((state) => {
  const option = document.createElement("option");
  option.value = state;
  if (state == 0) {
    option.text = "Chưa hoàn thành";
  } else if (state == 1) {
    option.text = "Đang tiến hành";
  } else option.text = "Đã hoàn thành";
  taskState.appendChild(option);
});

const summitBtn = document.querySelector("#submit-btn");
summitBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log("click");
  const description = descriptionInput.value;
  const selectedDate = startDateSelect.value;
  const selectedStartTime = startTimeSelect.value;
  const selectedEndTime = endTimeSelect.value;
  const selectedArea = areaSelect.value;
  const selectedMCP = [];
  for (let i = 0; i < mcpSelect.options.length; i++) {
    const option = mcpSelect.options[i];

    if (option.selected) {
      selectedMCP.push(option.value);
    }
  }
  const selectedTrolley = [];
  for (let i = 0; i < trolleySelect.options.length; i++) {
    const option = trolleySelect.options[i];

    if (option.selected) {
      selectedTrolley.push(option.value);
    }
  }
  const selectedCollector = [];
  for (let i = 0; i < collectorSelect.options.length; i++) {
    const option = collectorSelect.options[i];

    if (option.selected) {
      selectedCollector.push(option.value);
    }
  }
  const selectedTruck = [];
  for (let i = 0; i < truckSelect.options.length; i++) {
    const option = truckSelect.options[i];

    if (option.selected) {
      selectedTruck.push(option.value);
    }
  }
  const selectedJanitor = [];
  for (let i = 0; i < janitorSelect.options.length; i++) {
    const option = janitorSelect.options[i];

    if (option.selected) {
      selectedJanitor.push(option.value);
    }
  }
  let selectedState;
  for (let i = 0; i < taskState.options.length; i++) {
    const option = taskState.options[i];

    if (option.selected) {
      selectedState = option.value;
    }
  }
  //Janitor
  const janitor = [];
  for (let i = 0; i < selectedJanitor.length; i++) {
    const janitor_infor = {};
    janitor_infor.id = selectedJanitor[i];
    janitor_infor.mcp = selectedMCP[i];
    janitor_infor.vehicle = selectedTrolley[i];
    janitor.push(janitor_infor);
  }
  //Collector
  const collector = [];
  for (let i = 0; i < selectedCollector.length; i++) {
    const collector_infor = {};
    collector_infor.id = selectedCollector[i];
    collector_infor.vehicle = selectedTruck[i];
    collector.push(collector_infor);
  }
  //Route
  const route = [];
  for (let i = 0; i < selectedMCP.length; i++) {
    const route_infor = {};
    route_infor.id = String(i + 1);
    route_infor.address = {};
    const index = mcps.findIndex((location) => location.id === selectedMCP[i]);
    route_infor.address.location_id = mcps[index].address.location_id;
    route_infor.address.lon = mcps[index].address.lon;
    route_infor.address.lat = mcps[index].address.lat;
    route.push(route_infor);
  }
  //Task Data

  TaskSelect.id = "TASK0004";
  TaskSelect.description = description;
  TaskSelect.createdBy = getCookie("id");
  TaskSelect.createdDate = formattedDate;
  TaskSelect.createdHour = formattedHour;
  TaskSelect.janitor = [];
  for (let i = 0; i < janitor.length; i++) {
    TaskSelect.janitor.push(janitor[i]);
  }
  TaskSelect.collector = [];
  for (let i = 0; i < collector.length; i++) {
    TaskSelect.collector.push(collector[i]);
  }
  TaskSelect.route = [];
  for (let i = 0; i < route.length; i++) {
    TaskSelect.route.push(route[i]);
  }
  TaskSelect.startDate = selectedDate;
  TaskSelect.startTime = selectedStartTime;
  TaskSelect.endTime = selectedEndTime;
  TaskSelect.checkoutTime = "0:00";
  TaskSelect.state = selectedState;
  // console.log(TaskSelect);
  if (confirm("Bạn có muốn tạo công việc này ?") == true) {
    await postTask();
    alert("Tạo công việc thành công");
    window.location.href = "/tasks";
  }
});

$(".chosen-select").trigger("chosen:updated");
