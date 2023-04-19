import Task from '../assets/fake-data/tasks-data.js'
console.log(window.location.search);
const taskCode = window.location.search.substring(4,12);
const insertIDTask = 
`<div class="title_list">Xem chi tiết công việc</div>
<a href="/tasks/generalInfo?id=${taskCode}" class="item_nav">Thông tin tổng quan</a>
<a href="./Staff?id=${taskCode}" class="item_nav">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav" style="background-color: #007777; color: #ffff">Danh sách điểm thu gom</a>
<a class="item_nav">Tuyến đường di chuyển</a>`;
document.querySelector('.view_detail').innerHTML = insertIDTask;
const result = Task.find(({code}) => {
    return code === taskCode
})
console.log(result);

if (result) {
var contain = ``;
contain = "Điểm thu gom " + result.code;
document.querySelector('.title_info_task').innerHTML = contain;
contain = 
`<tr class = "info_row">
<th class ="info_item">STT</th>
<th class ="info_item">Địa chỉ</th>
<th class ="info_item">Mã số</th>
<th class ="info_item">Thời điểm thu gom</th>
<th class ="info_item">Nhân viên phụ trách</th>
<th class ="info_item">Mã số nhân viên</th>
</tr>`;
for (let i = 0; i < result.janitor.length; i++) {
    contain += 
    `<tr class = "info_row">
    <td class ="info_item">${i+1}</td>
    <td class ="info_item">${result.janitor[i].mcp + ", " + result.collector[0].district}</td>
    <td class ="info_item">${result.janitor[i].id_mcp}</td>
    <td class ="info_item">${result.startDate + " " + result.janitor[i].time}</td>
    <td class ="info_item">${result.janitor[i].name}</td>
    <td class ="info_item">${result.janitor[i].staffID}</td>
</tr>`;
}
document.querySelector('.info_table').innerHTML = contain;
}