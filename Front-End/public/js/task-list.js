const TASK_LIST = [
    {
        id: 'TASK00001',
        date: '02/04/2023',
        start: '10:00',
        end: '11:00',
        status: 1
    },
    {
        id: 'TASK00002',
        date: '02/04/2023',
        start: '12:00',
        end: '13:30',
        status: 1
    },
    {
        id: 'TASK00003',
        date: '02/04/2023',
        start: '14:00',
        end: '15:15',
        status: 1
    },
    {
        id: 'TASK00004',
        date: '03/04/2023',
        start: '9:30',
        end: '10:45',
        status: 1
    },
    {
        id: 'TASK00005',
        date: '03/04/2023',
        start: '11:00',
        end: '12:00',
        status: 0
    },
    {
        id: 'TASK00006',
        date: '03/04/2023',
        start: '14:30',
        end: '15:45',
        status: 0
    },
    {
        id: 'TASK00007',
        date: '04/04/2023',
        start: '11:00',
        end: '12:00',
        status: 1
    },
    {
        id: 'TASK00008',
        date: '04/04/2023',
        start: '14:00',
        end: '15:00',
        status: 1
    },
    {
        id: 'TASK00009',
        date: '05/04/2023',
        start: '10:00',
        end: '11:15',
        status: 1
    },
    {
        id: 'TASK00010',
        date: '05/04/2023',
        start: '12:30',
        end: '13:30',
        status: 0
    },
    {
        id: 'TASK00011',
        date: '05/04/2023',
        start: '15:00',
        end: '16:15',
        status: 0
    },
    {
        id: 'TASK00012',
        date: '06/04/2023',
        start: '9:00',
        end: '10:15',
        status: 2
    },
    {
        id: 'TASK00013',
        date: '06/04/2023',
        start: '11:00',
        end: '12:30',
        status: 2
    },
    {
        id: 'TASK00014',
        date: '07/04/2023',
        start: '10:00',
        end: '11:15',
        status: 2
    },
    {
        id: 'TASK00015',
        date: '07/04/2023',
        start: '13:30',
        end: '14:45',
        status: 2
    }
];
const ROWS_PER_PAGE = 10;
function renderTable(start) {
    let table = document.querySelector('.task-detail-table');
    let html = '';
    //Header
    html += `<tr>
                <th>STT</th>
                <th>Mã công việc</th>
                <th>Ngày</th>
                <th>Bắt đầu</th>
                <th>Hoàn thành</th>
                <th>Trạng thái</th>
                <th>Quản lý</th>
            </tr>`;
    //Detail rows
    const end = start + ROWS_PER_PAGE; //Display 10 rows per page
    for (let i = start; i < end && i < TASK_LIST.length; i++) {
        const task = TASK_LIST[i];
        html += `<tr>
            <td>${i + 1}</td>
            <td>${task.id}</td>
            <td>${task.date}</td>
            <td>${task.start}</td>
            <td>${task.end}</td>`
        if (task.status === 0) {
            html += `<td class="incompleted-task">Chưa hoàn thành</td>`;
        }
        else if (task.status === 1) {
            html += `<td class="completed-task">Đã hoàn thành</td>`;
        }
        else {
            html += `<td class="waiting-task">Chờ thực hiện</td>`;
        }
        html += `<td><button class="btn btn-secondary">Xem</button></td>
        </tr > `;
    }
    table.innerHTML = html;

    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
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
}


renderTable(0);