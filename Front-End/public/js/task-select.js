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
  "Quận Gò Vấp",
];

const mcps = [
  {
    "id": "MCP0001",
    "type": "MCP",
    "ward": "11",
    "district": "Gò Vấp",
    "address": {
      "location_id": "132 Lê Văn Thọ",
      "lon": 106.657142,
      "lat": 10.844348
    },
    "capacity": "20",
    "state": "Empty"
  },
  {
    "id": "MCP0002",
    "type": "MCP",
    "ward": "5",
    "district": "Gò Vấp",
    "address": {
      "location_id": "435 Lê Đức Thọ",
      "lon": 106.674036,
      "lat": 10.843802
    },
    "capacity": "20",
    "state": "Empty"
  },
  {
    "id": "MCP0003",
    "type": "MCP",
    "ward": "17",
    "district": "Gò Vấp",
    "address": {
      "location_id": "32 Nguyễn Văn Lượng",
      "lon": 106.674604,
      "lat": 10.838689
    },
    "capacity": "20",
    "state": "Full"
  },
  {
    "id": "MCP0004",
    "type": "MCP",
    "ward": "16",
    "district": "Gò Vấp",
    "address": {
      "location_id": "1043 Lê Đức Thọ",
      "lon": 106.661639,
      "lat": 10.851777
    },
    "capacity": "20",
    "state": "Empty"
  },
  {
    "id": "MCP0005",
    "type": "MCP",
    "ward": "9",
    "district": "Gò Vấp",
    "address": {
      "location_id": "528 Nguyễn Văn Khối",
      "lon": 106.64510056071889,
      "lat": 10.845867745852026
    },
    "capacity": "25",
    "state": "Empty"
  },
  {
    "id": "MCP0006",
    "type": "MCP",
    "ward": "8",
    "district": "Gò Vấp",
    "address": {
      "location_id": "4 Phạm Văn Chiêu",
      "lon": 106.64137847557656,
      "lat": 10.844831683546847
    },
    "capacity": "18",
    "state": "Empty"
  },
  {
    "id": "MCP0007",
    "type": "MCP",
    "ward": "3",
    "district": "Gò Vấp",
    "address": {
      "location_id": "86 Nguyễn Thái Sơn",
      "lon": 106.68053254061681,
      "lat": 10.816308368528626
    },
    "capacity": "20",
    "state": "Full"
  },
  {
    "id": "MCP0008",
    "type": "MCP",
    "ward": "7",
    "district": "Gò Vấp",
    "address": {
      "location_id": "220 Nguyễn Văn Nghi",
      "lon": 106.68604756142221,
      "lat": 10.8247469417202
    },
    "capacity": "20",
    "state": "Empty"
  },
  {
    "id": "MCP0009",
    "type": "MCP",
    "ward": "1",
    "district": "Gò Vấp",
    "address": {
      "location_id": "292 Phạm Văn Đồng",
      "lon": 106.68938413664043,
      "lat": 10.819138710260136
    },
    "capacity": "20",
    "state": "Empty"
  }
];


const vehicles = [
  {
    "id": "TK0001",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TK0002",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TK0003",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0001",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0002",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0003",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0004",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0005",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0006",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0007",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0008",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  },
  {
    "id": "TR0009",
    "vehicle_info": {
      "start_address": {
        "location_id": "Bãi xe",
        "lon": 106.664658,
        "lat": 10.847044
      }
    },
    "state": "Free"
  }
]
;

const collectors = [
  {
    "id": "CO0001",
    "name": "Nguyễn Văn A",
    "sex": "Nam",
    "phone": "091765212",
    "address": "157 Nguyễn Oanh",
    "ward": "1",
    "district": "Gò Vấp"
  },
  {
    "id": "CO0002",
    "name": "Nguyễn Văn B",
    "sex": "Nam",
    "phone": "091765212",
    "address": "30 NguyễnOanh",
    "ward": "1",
    "district": "Gò Vấp"
  },
  {
    "id": "CO0003",
    "name": "Nguyễn Văn C",
    "sex": "Nam",
    "phone": "091765212",
    "address": "528 Nguyễn Văn Khối",
    "ward": "9",
    "district": "Gò Vấp"
  },
  {
    "id": "CO0004",
    "name": "Nguyễn Văn D",
    "sex": "Nam",
    "phone": "091765212",
    "address": "530 Nguyễn Văn Khối",
    "ward": "9",
    "district": "Gò Vấp"
  },
  {
    "id": "CO0005",
    "name": "Nguyễn Văn E",
    "sex": "Nam",
    "phone": "091765212",
    "address": "557 Nguyễn Văn Khối",
    "ward": "8",
    "district": "Gò Vấp"
  },
  {
    "id": "CO0006",
    "name": "Nguyễn Văn F",
    "sex": "Nam",
    "phone": "091765212",
    "address": "588 Nguyễn Văn Quá",
    "ward": "Đông Hưng Thuận",
    "district": "12"
  },
  {
    "id": "CO0007",
    "name": "Nguyễn Văn G",
    "sex": "Nam",
    "phone": "091765212",
    "address": "590 Nguyễn Văn Quá",
    "ward": "Đông Hưng Thuận",
    "district": "12"
  },
  {
    "id": "CO0008",
    "name": "Nguyễn Văn H",
    "sex": "Nam",
    "phone": "091765212",
    "address": "40 QL1A",
    "ward": "Thới An",
    "district": "12"
  },
  {
    "id": "CO0009",
    "name": "Nguyễn Văn I",
    "sex": "Nam",
    "phone": "091765212",
    "address": "42 QL1A",
    "ward": "Thới An",
    "district": "12"
  },
  {
    "id": "CO0010",
    "name": "Nguyễn Văn J",
    "sex": "Nam",
    "phone": "091765212",
    "address": "100 Vườn Lài",
    "ward": "An Phú Đông",
    "district": "12"
  },
  {
    "id": "CO0011",
    "name": "Nguyễn Văn K",
    "sex": "Nam",
    "phone": "091765212",
    "address": "102 Vườn Lài",
    "ward": "An Phú Đông",
    "district": "12"
  },
  {
    "id": "CO0012",
    "name": "Nguyễn Văn L",
    "sex": "Nam",
    "phone": "091765212",
    "address": "124 Phan Đăng Lưu",
    "ward": "3",
    "district": "Phú Nhuận"
  },
  {
    "id": "CO0013",
    "name": "Nguyễn Văn M",
    "sex": "Nam",
    "phone": "091765212",
    "address": "126 Phan Đăng Lưu",
    "ward": "3",
    "district": "Phú Nhuận"
  },
  {
    "id": "CO0014",
    "name": "Nguyễn Văn N",
    "sex": "Nam",
    "phone": "091765212",
    "address": "300 Phan Xích Long",
    "ward": "1",
    "district": "Phú Nhuận"
  },
  {
    "id": "CO0015",
    "name": "Nguyễn Văn O",
    "sex": "Nam",
    "phone": "091765212",
    "address": "351 Phan Xích Long",
    "ward": "1",
    "district": "Phú Nhuận"
  },
  {
    "id": "CO0016",
    "name": "Nguyễn Văn P",
    "sex": "Nam",
    "phone": "091765212",
    "address": "5 Thích Quảng Đức",
    "ward": "5",
    "district": "Phú Nhuận"
  }
];

const janitors = [
  {
    "id": "JN0001",
    "name": "Trần Văn A",
    "sex": "Nam",
    "phone": "088765212",
    "address": "132/12 Nguyen Oanh",
    "ward": "1",
    "district": "Go Vap"
  },
  {
    "id": "JN0002",
    "name": "Trần Văn B",
    "sex": "Nam",
    "phone": "077765212",
    "address": "9 Nguyen Oanh",
    "ward": "1",
    "district": "Go Vap"
  },
  {
    "id": "JN0003",
    "name": "Trần Văn C",
    "sex": "Nam",
    "phone": "022765212",
    "address": "9 Nguyen Van Luong",
    "ward": "1",
    "district": "Go Vap"
  },
  {
    "id": "JN0004",
    "name": "Trần Văn D",
    "sex": "Nam",
    "phone": "011765212",
    "address": "9/12 Thong Nhat",
    "ward": "1",
    "district": "Go Vap"
  },
  {
    "id": "JN0005",
    "name": "Trần Văn E",
    "sex": "Nam",
    "phone": "033765212",
    "address": "93 Nguyen Oanh",
    "ward": "1",
    "district": "Go Vap"
  }
];
const TaskSelect = {};
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
  areaSelect.append(option)
});

mcps.forEach((mcp) => {
  const option = document.createElement("option");
  option.value = mcp.id;
  option.text = mcp.id;
  mcpSelect.appendChild(option);
});

vehicles.forEach((vehicle) => {
  if(vehicle.id.slice(0,2) == 'TR') {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.text = vehicle.id;
    trolleySelect.appendChild(option);
  }
});

collectors.forEach((collector) => {
  const option = document.createElement("option");
  option.value = collector.id;
  option.text = collector.id;
  collectorSelect.appendChild(option);
});

vehicles.forEach((vehicles) => {
  if(vehicles.id.slice(0,2) == 'TK') {
    const option = document.createElement("option");
    option.value = vehicles.id;
    option.text = vehicles.id;
    truckSelect.appendChild(option);
  }
});

janitors.forEach((janitor) => {
  const option = document.createElement("option");
  option.value = janitor.id;
  option.text = janitor.id;
  janitorSelect.appendChild(option);
});

// Save selected data to variables on form submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

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
  const selectedCollector = collectorSelect.value;
  const selectedTruck = truckSelect.value;
  const selectedJanitor = [];
  for (let i = 0; i < janitorSelect.options.length; i++) {
    const option = janitorSelect.options[i];

    if (option.selected) {
      selectedJanitor.push(option.value);
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
  const collector = {};
  collector.id = selectedCollector;
  collector.vehicle = selectedTruck;
  //Route
  const route = [];
  for (let i = 0; i < selectedMCP.length; i++) {
    const route_infor = {};
    route_infor.id = String(i + 1);
    route_infor.address = {};
    const index = mcps.findIndex(location => location.id === selectedMCP[i]);
    route_infor.address.location_id = mcps[index].address.location_id;
    route_infor.address.lon = mcps[index].address.lon;
    route_infor.address.lat = mcps[index].address.lat;
    route.push(route_infor);
  }
  //Task Data
  TaskSelect.id = "TASK0004";
  TaskSelect.description = "Dọn rác khu vực " + selectedArea;
  TaskSelect.createdBy = "BO0001";
  TaskSelect.janitor = [];
  for (let i = 0; i < selectedJanitor.length; i++) {
    TaskSelect.janitor.push(janitor[i]);
  }
  TaskSelect.collector = [];
  TaskSelect.collector.push(collector);
  TaskSelect.route = [];
  for (let i = 0; i < selectedMCP.length; i++) {
    TaskSelect.route.push(route[i]);
  }
  TaskSelect.startTime = selectedStartTime;
  TaskSelect.endTime = selectedEndTime;
  console.log(TaskSelect);
  // You can now use these variables to do whatever you need with the selected data
});

$(".chosen-select").trigger("chosen:updated");