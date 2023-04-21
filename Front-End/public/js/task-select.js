// Data for dropdown select lists
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

const areas = [
  "North",
  "South",
  "East",
  "West",
];

const mcps = [
"MCP1",
"MCP2",
"MCP3",
"MCP4",
"MCP5",
"MCP6",
"MCP7",
"MCP8",
];

const trolleys = [
"Trolley1",
"Trolley2",
"Trolley3",
"Trolley4",
"Trolley5",
"Trolley6",
"Trolley7",
"Trolley8",
];

const collectors = [
"Collector1",
"Collector2",
"Collector3",
"Collector4",
"Collector5",
"Collector6",
"Collector7",
"Collector8",
];

const trucks = [
"Truck1",
"Truck2",
"Truck3",
"Truck4",
"Truck5",
"Truck6",
"Truck7",
"Truck8",
];

const janitors = [
"Janitor1",
"Janitor2",
"Janitor3",
"Janitor4",
"Janitor5",
"Janitor6",
"Janitor7",
"Janitor8",
];

// Get references to form elements
const startTimeSelect = document.getElementById("start-time");
const endTimeSelect = document.getElementById("end-time");
const areaSelect = document.getElementById("area");
const mcpSelect = document.getElementById("mcps");
const trolleySelect = document.getElementById("trolleys");
const collectorSelect = document.getElementById("collectors");
const truckSelect = document.getElementById("trucks");
const janitorSelect = document.getElementById("janitors");

// Populate dropdown select lists with data
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
areaSelect.appendChild(option);
});

mcps.forEach((mcp) => {
const option = document.createElement("option");
option.value = mcp;
option.text = mcp;
mcpSelect.appendChild(option);
});

trolleys.forEach((trolley) => {
const option = document.createElement("option");
option.value = trolley;
option.text = trolley;
trolleySelect.appendChild(option);
});

collectors.forEach((collector) => {
const option = document.createElement("option");
option.value = collector;
option.text = collector;
collectorSelect.appendChild(option);
});

trucks.forEach((truck) => {
const option = document.createElement("option");
option.value = truck;
option.text = truck;
truckSelect.appendChild(option);
});

janitors.forEach((janitor) => {
const option = document.createElement("option");
option.value = janitor;
option.text = janitor;
janitorSelect.appendChild(option);
});

// Save selected data to variables on form submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
event.preventDefault();

const selectedStartTime = startTimeSelect.value;
const selectedEndTime = endTimeSelect.value;
const selectedArea = areaSelect.value;
const selectedMCP = mcpSelect.value;
const selectedTrolley = trolleySelect.value;
const selectedCollector = collectorSelect.value;
const selectedTruck = truckSelect.value;
const selectedJanitor = janitorSelect.value;
console.log(
`Selected data: Start Time: ${selectedStartTime}, End Time: ${selectedEndTime}, Area: ${selectedArea}, MCP: ${selectedMCP}, Trolley: ${selectedTrolley}, Collector: ${selectedCollector}, Truck: ${selectedTruck}, Janitor: ${selectedJanitor}`
);

// You can now use these variables to do whatever you need with the selected data
});