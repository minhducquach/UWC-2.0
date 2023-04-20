console.log(window.location.search);
const taskCode = window.location.search.substring(4, 12);
const insertIDTask = `<div class="title_list">Xem chi tiết công việc</div>
<a
  href="/tasks/generalInfo?id=${taskCode}" class="item_nav" style= "background-color: #007777; color: #ffff;">Thông tin tổng quan</a>
<a href="./Staff?id=${taskCode}" class="item_nav">Danh sách nhân viên</a>
<a href="./MCP?id=${taskCode}" class="item_nav" ">Danh sách điểm thu gom</a>
<a class="item_nav">Tuyến đường di chuyển</a>`;
document.querySelector(".view_detail").innerHTML = insertIDTask;

let result;
let task = await fetch(`/tasks/getTask/${taskCode}`)
  .then((response) => response.json())
  .then((data) => {
    result = data;
  })
  .catch((error) => console.error(error));

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
            <div class = "contain_info">${result.creator}</div>
            <div class = "contain_info">${result.ID_creator}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Ngày khởi tạo</div>
            <div class = "contain_info">${result.createDate}</div>
            <div class = "contain_info">${result.createTime}</div>
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
            <div class = "contain_info">${result.finishDate_Expected}</div>
            <div class = "contain_info">${result.finishTime_Expected}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Kết thúc (thực tế)</div>
            <div class = "contain_info">${result.finishDate_Reality}</div>
            <div class = "contain_info">${result.finishTime_Reality}</div>
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Khu vực</div>
            <div class = "contain_info">${result.collector[0].district}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Phương tiện sử dụng</div>
            <div class = "contain_info">${result.collector[0].vehicle}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Quãng đường</div>
            <div class = "contain_info">${result.distance}</div>
        </div>
    </div>
    <div style = "display: flex; flex-direction: row; gap: 3rem;">
        <div class = "item_info">
            <div class = "name_info">Số điểm thu gom</div>
            <div class = "contain_info">${
              result.residential_area + result.industrial_area
            }</div>
        </div>
        <div class = "item_info"> 
            <div class = "name_info">Khu dân cư</div>
            <div class = "contain_info">${result.residential_area}</div>
        </div>
        <div class = "item_info">
            <div class = "name_info">Khu công nghiệp</div>
            <div class = "contain_info">${result.industrial_area}</div>
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
