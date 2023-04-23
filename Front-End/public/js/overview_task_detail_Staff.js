console.log(window.location.search);
const taskCode = window.location.search.substring(4, 12);
const insertIDTask = `<div class="title_list">Xem chi tiết công việc</div>
<a href="/tasks/generalInfo?id=${taskCode}" class="item_nav">Thông tin tổng quan</a>
<a href="/tasks/Staff?id=${taskCode}" class="item_nav" style="background-color: #007777; color: #ffff">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav">Danh sách điểm thu gom</a>
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
result.janitor.forEach((element) => {
  janitorIDs = [...janitorIDs, element.id];
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
let collectorIDs = [];
result.collector.forEach((element) => {
  collectorIDs = [...collectorIDs, element.id];
});
let collectors = [];
let col = await fetch("/staffs/getAllCollectors")
  .then((response) => response.json())
  .then((data) => {
    collectors = data;
  })
  .catch((error) => console.error(error));
//Filter out the collectors who are not in this task
collectors = collectors.filter((collector) =>
  collectorIDs.includes(collector.id)
);
console.log(collectors.length);
if (result) {
  var contain = ``;
  contain = "Nhân viên tham gia " + result.id;
  document.querySelector(".title_info_task").innerHTML = contain;

  contain = `<div style = "margin-top: 4rem;">
<div class = "name_info" style="font-size: 30px">Collector</div>
<table class = "info_table">
    <tr class = "info_row">
        <th class = "info_item">STT</th>
        <th class = "info_item">Họ và tên</th>
        <th class = "info_item">Mã NV</th>
        <th class = "info_item">Giới tính</th>
        <th class = "info_item">SĐT</th>
        <th class = "info_item">Phương tiện</th>
    </tr>`;
  for (let i = 0; i < collectors.length; i++) {
    contain += `<tr class = "info_row">
            <td class = "info_item">${i + 1}</td>
            <td class = "info_item">${collectors[i].name}</td>
            <td class = "info_item">${collectors[i].id}</td>
            <td class = "info_item">${collectors[i].sex}</td>
            <td class = "info_item">${collectors[i].phone}</td>
            <td class = "info_item">${result.collector[i].vehicle}</td>
        </tr>`;
  }
  contain += `</table>
    </div>
    <div style = "margin-top: 2rem;">
        <div class = "name_info" style="font-size: 30px">Janitor</div>
        <table class = "info_table">
            <tr class = "info_row">
                <th class = "info_item">STT</th>
                <th class = "info_item">Họ và tên</th>
                <th class = "info_item">Mã NV</th>
                <th class = "info_item">Giới tính</th>
                <th class = "info_item">SĐT</th>
                <th class = "info_item">Phương tiện</th>
            </tr>`;
  for (let i = 0; i < janitors.length; i++) {
    contain += `<tr class = "info_row">
          <td class = "info_item">${i + 1}</td>
          <td class = "info_item">${janitors[i].name}</td>
          <td class = "info_item">${janitors[i].id}</td>
          <td class = "info_item">${janitors[i].sex}</td>
          <td class = "info_item">${janitors[i].phone}</td>
          <td class = "info_item">${result.janitor[i].vehicle}</td>
      </tr>`;
  }
  contain += `</table>
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
