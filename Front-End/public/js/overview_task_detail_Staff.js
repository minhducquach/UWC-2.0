import Task from '../assets/fake-data/tasks-data.js'
console.log(window.location.search);
const taskCode = window.location.search.substring(4,12);
const insertIDTask = 
`<div class="title_list">Xem chi tiết công việc</div>
<a href="/tasks/generalInfo?id=${taskCode}" class="item_nav">Thông tin tổng quan</a>
<a href="./Staff?id=${taskCode}" class="item_nav" style="background-color: #007777; color: #ffff">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav">Danh sách điểm thu gom</a>
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
`<div style = "margin-top: 4rem;">
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
    for (let i = 0; i < result.janitor.length; i++) {
        contain += 
        `<tr class = "info_row">
            <td class = "info_item">${i+1}</td>
            <td class = "info_item">${result.janitor[i].name}</td>
            <td class = "info_item">${result.janitor[i].staffID}</td>
            <td class = "info_item">${result.janitor[i].sex}</td>
            <td class = "info_item">${result.janitor[i].phone}</td>
            <td class = "info_item">${result.janitor[i].vehicle}</td>
        </tr>`;
    }
    contain += 
    `</table>
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
    for (let i = 0; i < result.collector.length; i++) {
        contain += 
        `<tr class = "info_row">
            <td class = "info_item">${i+1}</td>
            <td class = "info_item">${result.janitor[i].name}</td>
            <td class = "info_item">${result.janitor[i].ID}</td>
            <td class = "info_item">${result.janitor[i].sex}</td>
            <td class = "info_item">${result.janitor[i].phone}</td>
            <td class = "info_item">${result.janitor[i].vehicle}</td>
        </tr>`;
    }
    contain += 
    `</table>
    </div>`;
document.querySelector('.detail_info').innerHTML = contain;
}