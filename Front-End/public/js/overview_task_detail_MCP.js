console.log(window.location.search);
const taskCode = window.location.search.substring(4, 12);
const insertIDTask = `<div class="title_list">Xem chi tiết công việc</div>
<a href="/tasks/generalInfo?id=${taskCode}" class="item_nav">Thông tin tổng quan</a>
<a href="./Staff?id=${taskCode}" class="item_nav">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav" style="background-color: #007777; color: #ffff">Danh sách điểm thu gom</a>
<a href="./route?id=${taskCode}" class="item_nav">Tuyến đường di chuyển</a>`;
document.querySelector(".view_detail").innerHTML = insertIDTask;
const insertIDUpdate = `
<div class="title_list">Chỉnh sửa công việc</div>
<a class = "item_nav update-task-link"  href="/tasks/updateTask?id=${taskCode}">Chỉnh sửa công việc</a>
<button id="delete" class = "item_nav"style = "color: #d82f2f;">Xóa công việc</button>
`;
document.querySelector(".update-task").innerHTML = insertIDUpdate;
let result;
let task = await fetch(`/tasks/getTask/${taskCode}`)
  .then((response) => response.json())
  .then((data) => {
    result = data;
  })
  .catch((error) => console.error(error));
let janitorIDs = [];
let mcpIDs = [];
result.janitor.forEach((element) => {
  janitorIDs = [...janitorIDs, element.id];
  mcpIDs = [...mcpIDs, element.mcp];
});
//From the list of janitors and collectors, find their information by using Staff API
let janitors = [];
let jan = await fetch("/staffs/getAllJanitors")
  .then((response) => response.json())
  .then((data) => {
    janitors = data;
  })
  .catch((error) => console.error(error));
//Filter out the janitors who are not in this task
janitors = janitors.filter((janitor) => janitorIDs.includes(janitor.id));

let mcps = [];
let mcp = await fetch("/mcps/getAllMCPs")
  .then((response) => response.json())
  .then((data) => {
    mcps = data;
  })
  .catch((error) => console.error(error));
mcps = mcps.filter((mcp) => mcpIDs.includes(mcp.id));
console.log(mcps);
if (result) {
  var contain = ``;
  contain = "Các điểm thu gom " + result.id;
  document.querySelector(".title_info_task").innerHTML = contain;
  contain = `<tr class = "info_row">
<th class ="info_item">STT</th>
<th class ="info_item">Địa chỉ</th>
<th class ="info_item">Mã số</th>
<th class ="info_item">Thời điểm thu gom</th>
<th class ="info_item">Nhân viên phụ trách</th>
<th class ="info_item">Mã số nhân viên</th>
</tr>`;
  for (let i = 0; i < result.janitor.length; i++) {
    contain += `<tr class = "info_row">
    <td class ="info_item">${i + 1}</td>
    <td class ="info_item">${
      mcps[i].address.location_id +
      ", P." +
      mcps[i].ward +
      ", Q." +
      mcps[i].district
    }</td>
    <td class ="info_item">${mcps[i].id}</td>
    <td class ="info_item">${result.startDate}</td>
    <td class ="info_item">${janitors[i].name}</td>
    <td class ="info_item">${janitors[i].id}</td>
</tr>`;
  }
  document.querySelector(".info_table").innerHTML = contain;
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
