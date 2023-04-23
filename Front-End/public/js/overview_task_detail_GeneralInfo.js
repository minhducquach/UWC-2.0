import mapUtil from "./map_util.js";
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // Shift back
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${+newExponent + exp}`);
}
const round10 = (value, exp) => decimalAdjust("round", value, exp);
console.log(window.location.search);
const taskCode = new URLSearchParams(window.location.search).get("id");
const insertIDTask = `<div class="title_list">Xem chi tiết công việc</div>
<a
  href="/tasks/generalInfo?id=${taskCode}" class="item_nav" style= "background-color: #007777; color: #ffff;">Thông tin tổng quan</a>
<a href="./Staff?id=${taskCode}" class="item_nav">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav" ">Danh sách điểm thu gom</a>
<a href="./route?id=${taskCode}" class="item_nav">Tuyến đường di chuyển</a>`;
document.querySelector(".view_detail").innerHTML = insertIDTask;
const insertIDUpdate = `
<div class="title_list">Chỉnh sửa công việc</div>
<a class = "item_nav update-task-link"  href="/tasks/updateTask?id=${taskCode}">Chỉnh sửa công việc</a>
<button id="delete" class = "item_nav"style = "color: #d82f2f;">Xóa công việc</button>
`;
{
  /* <a class = "item_nav" style = "color: #d82f2f">Xóa công việc</a>`; */
}
document.querySelector(".update-task").innerHTML = insertIDUpdate;
let result;
let task = await fetch(`/tasks/getTask/${taskCode}`)
  .then((response) => response.json())
  .then((data) => {
    result = data;
  })
  .catch((error) => console.error(error));

let BO_data;
let BO = await fetch(`/users/getUser/${result.createdBy}`)
  .then((response) => response.json())
  .then((data) => {
    BO_data = data;
  })
  .catch((error) => console.error(error));

//Get distance
let vehicle_id = result.collector[0].vehicle;
let vehicle_data;
let vehicle = await fetch(`/vehicles/getVehicle/${vehicle_id}`)
  .then((response) => response.json())
  .then((data) => {
    vehicle_data = data;
  })
  .catch((error) => console.error(error));

const dataRoute = {
  vehicles: [
    {
      vehicle_id: vehicle_data.id,
      start_address: vehicle_data.vehicle_info.start_address,
    },
  ],
  vehicle_types: [{ type_id: "custom_vehicle_type", profile: "car" }],
  services: result.route,
};

let distance = await mapUtil.getDistance(dataRoute);

if (result) {
  var contain = ``;
  if (result.state === "2") {
    contain = `<div class = "status_task" style = "border: solid 4px #90EE90;">
            <div class = "statusdot" style = "border: solid 4px #90EE90; background-color: #00BC00;"></div>
            <i class = "constain_status" style = "color: #008000;">Đã hoàn thành</i>
        </div>`;
  } else if (result.state === "1") {
    contain = `<div class = "status_task" style = "border: solid 4px #eeee90;">
            <div class = "statusdot" style = "border: solid 4px #eeee90; background-color: #bcbc00;"></div>
            <i class = "constain_status" style = "color: #7a8000;">Đang tiến hành</i>
        </div>`;
  } else {
    contain = `<div class = "status_task" style = "border: solid 4px #ee9090;">
            <div class = "statusdot" style = "border: solid 4px #ee9090; background-color: #bc0000;"></div>
            <i class = "constain_status" style = "color: #800000;">Chưa hoàn thành</i>
        </div>`;
  }
  document.querySelector(".status").innerHTML = contain;
  var numJanitor = result.janitor.length;
  var numCollector = result.collector.length;
  contain = `<div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Mã công việc</div>
            <div class = "contain_info">${result.id}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Người khởi tạo</div>
            <div class = "contain_info">${BO_data.name}</div>
            <div class = "contain_info">${BO_data.id}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Ngày khởi tạo</div>
            <div class = "contain_info">${result.createdDate}</div>
            <div class = "contain_info">${result.createdHour}</div>
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Bắt đầu</div>
            <div class = "contain_info">${result.startDate}</div>
            <div class = "contain_info">${result.startTime}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Kết thúc (dự kiến)</div>
            <div class = "contain_info">${result.startDate}</div>
            <div class = "contain_info">${result.endTime}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Kết thúc (thực tế)</div>
            <div class = "contain_info">${result.startDate}</div>
            <div class = "contain_info">${result.checkoutTime}</div>
            
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Khu vực</div>
            <div class = "contain_info">Quận Gò Vấp</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Phương tiện sử dụng</div>
            <div class = "contain_info">${result.collector[0].vehicle}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Quãng đường</div>
            <div class = "contain_info">${round10(distance / 1000, -2)} Km</div>
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Số điểm thu gom</div>
            <div class = "contain_info">${result.route.length}</div>
        </div>
        <div class = "item_info"> 
            <div class = "name_info">Khu dân cư</div>
            <div class = "contain_info">${result.route.length}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Khu công nghiệp</div>
            <div class = "contain_info">0</div>
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Nhân viên</div>
            <div class = "contain_info">${numJanitor + numCollector}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Collector</div>
            <div class = "contain_info">${numCollector}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Janitor</div>
            <div class = "contain_info">${numJanitor}</div>
        </div>
    </div>`;
  document.querySelector(".detail_info").innerHTML = contain;
}

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
