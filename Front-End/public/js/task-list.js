// const TASK_LIST = [
//   {
//     id: "TASK0001",
//     date: "02/04/2023",
//     start: "10:00",
//     end: "11:00",
//     status: 1,
//   },
//   {
//     id: "TASK0002",
//     date: "02/04/2023",
//     start: "12:00",
//     end: "13:30",
//     status: 1,
//   },
//   {
//     id: "TASK0003",
//     date: "02/04/2023",
//     start: "14:00",
//     end: "15:15",
//     status: 1,
//   },
//   {
//     id: "TASK0004",
//     date: "03/04/2023",
//     start: "9:30",
//     end: "10:45",
//     status: 1,
//   },
//   {
//     id: "TASK0005",
//     date: "03/04/2023",
//     start: "11:00",
//     end: "12:00",
//     status: 0,
//   },
//   {
//     id: "TASK0006",
//     date: "03/04/2023",
//     start: "14:30",
//     end: "15:45",
//     status: 0,
//   },
//   {
//     id: "TASK0007",
//     date: "04/04/2023",
//     start: "11:00",
//     end: "12:00",
//     status: 1,
//   },
//   {
//     id: "TASK0008",
//     date: "04/04/2023",
//     start: "14:00",
//     end: "15:00",
//     status: 1,
//   },
//   {
//     id: "TASK0009",
//     date: "05/04/2023",
//     start: "10:00",
//     end: "11:15",
//     status: 1,
//   },
//   {
//     id: "TASK0010",
//     date: "05/04/2023",
//     start: "12:30",
//     end: "13:30",
//     status: 0,
//   },
//   {
//     id: "TASK0011",
//     date: "05/04/2023",
//     start: "15:00",
//     end: "16:15",
//     status: 0,
//   },
//   {
//     id: "TASK0012",
//     date: "06/04/2023",
//     start: "9:00",
//     end: "10:15",
//     status: 2,
//   },
//   {
//     id: "TASK0013",
//     date: "06/04/2023",
//     start: "11:00",
//     end: "12:30",
//     status: 2,
//   },
//   {
//     id: "TASK0014",
//     date: "07/04/2023",
//     start: "10:00",
//     end: "11:15",
//     status: 2,
//   },
//   {
//     id: "TASK0015",
//     date: "07/04/2023",
//     start: "13:30",
//     end: "14:45",
//     status: 2,
//   },
// ];

let TASK_LIST;
let tasks = await fetch("/tasks/getAllTasks")
  .then((response) => response.json())
  .then((data) => {
    TASK_LIST = data;
  })
  .catch((error) => console.error(error));
//Sort TASK_LIST by startDate 
TASK_LIST.sort((a, b) => {
  let dateA = new Date(a.startDate);
  let dateB = new Date(b.startDate);
  //If same date, sort by startTime
  if (dateA === dateB) {
    let timeA = new Date(a.startTime);
    let timeB = new Date(b.startTime);
    return timeA - timeB;
  }
  return dateB - dateA;
});
const ROWS_PER_PAGE = 10;
function renderTable(start) {
  let table = document.querySelector(".task-detail-table");
  let html = "";
  //Header
  html += `<tr>
                <th>STT</th>
                <th>Mã công việc</th>
                <th>Mô tả</th>
                <th>Ngày</th>
                <th>Bắt đầu</th>
                <th>Trạng thái</th>
                <th>Quản lý</th>
            </tr>`;
  //Detail rows
  const end = start + ROWS_PER_PAGE; //Display 10 rows per page
  // while (true) {
  //   if (typeof TASK_LIST === "undefined") continue;
  //   else break;
  // }
  for (let i = start; i < end && i < TASK_LIST.length; i++) {
    const task = TASK_LIST[i];
    html += `<tr>
            <td>${i + 1}</td>
            <td>${task.id}</td>
            <td style="text-align: left">${task.description}</td>
            <td>${task.startDate}</td>
            <td>${task.startTime}</td>`;
    if (task.state === "0") {
      html += `<td class="incompleted-task">Chưa hoàn thành</td>`;
    }
    else if (task.state === "2") {
      html += `<td class="completed-task">Đã hoàn thành</td>`;
    }
    else {
      html += `<td class="waiting-task">Đang tiến hành</td>`;
    }
    html += `<td><button class="btn btn-secondary" data-taskid="${task.id}">Xem</button></td>
        </tr > `;
  }
  table.innerHTML = html;

  // Navigation buttons
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  if (start === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    prevBtn.onclick = function () {
      renderTable(start - ROWS_PER_PAGE);
    };
  }
  if (end >= TASK_LIST.length) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    nextBtn.onclick = function () {
      renderTable(end);
    };
  }
  // Find the button element and add a click event listener
  const viewButtons = document.querySelectorAll(".btn-secondary");
  viewButtons.forEach((viewButton) => {
    viewButton.addEventListener("click", function () {
      const taskID = this.getAttribute("data-taskid");
      window.location.href = "/tasks/generalInfo?id=" + taskID;
    });
  });
}

renderTable(0);
