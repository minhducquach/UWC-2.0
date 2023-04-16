let Task = ""
$(document).ready(function(){
    $.ajax({
        url: '/task-data',
        type: 'GET',
    })
    .then(data => {
        if (data) {
            let tableContent = ""
            Task = JSON.parse(data)
            let i = 0
            Task.forEach(element => {
                tableContent += 
                `<tr data-index='${i}'> 
                    <td>${element.id}</td> 
                    <td>${element.description}</td> 
                    <td>${element.startDate}</td> 
                    <td>${element.startTime}</td> 
                    <td>${element.state}</td> 
                    <td><button class='${element.id} view-task-detail'>View</button></td> 
                </tr>`
                i += 1
            });
            if (tableContent != '') {
                const selector = document.querySelector('#tasks-table')
                if (selector != null){
                    selector.innerHTML = tableContent;
                }
            }
            const datatablesSimple = document.getElementById('datatablesSimple');
            if (datatablesSimple) {
                new simpleDatatables.DataTable(datatablesSimple);
            }
        }
    })
    // window.location.href = '/task-detail.html'
})
window.addEventListener("click", (event) => {
    const pointerTarget = event.target.classList[1] 
    if (pointerTarget === 'view-task-detail') {
        const taskID = event.target.classList[0]
        const result = Task.find(({id}) => {
            return id === taskID
        })
        if (result) {
            // Render short content
            let short_content = 
            `<div class="popup-content">
                <div>Task ID: ${result.id}</div>    
            </div>
            <div class="popup-content">
                <div>Description: ${result.description}</div>  
            </div>
            <div class="popup-content">
                <div>Start Date: ${result.startDate} at ${result.startTime}</div>
            </div>`
            document.querySelector('.short-content').innerHTML = short_content
            // Render janitor table
            let janitors = ""
            if (result.janitor) {
            result.janitor.forEach(element => {
                janitors += 
                `<tr>
                    <th>${element.name}</th>
                    <th>${element.address}, Phuong ${element.ward}, Quan ${element.district}</th>
                    <th>${element.phone}</th>
                    <th>${element.mcp}</th>
                    <th>${element.vehicle}</th>
                </tr>`
            });
                const selector = document.querySelector('#janitors-table')
                if (selector != null){
                    selector.innerHTML = janitors;
                }
            }
            // Render collector table
            let collectors = ""
            if (result.collector != '') {
            result.collector.forEach(element => {
                collectors += 
                `<tr>
                    <th>${element.name}</th>
                    <th>${element.address}, Phuong ${element.ward}, Quan ${element.district}</th>
                    <th>${element.phone}</th>
                    <th>${element.vehicle}</th>
                </tr>`
            });
                const selector = document.querySelector('#collectors-table')
                if (selector != null){
                    selector.innerHTML = collectors;
                }
            }
            // Render route
            let routes = ""
            let id = 1;
            result.route.forEach(element => {
                id += 1
                routes += 
                `<tr>
                    <th>${id}</th>
                    <th>${element}</th>
                </tr>`
            });
            if (routes != '') {
                const selector = document.querySelector('#routes-table')
                if (selector != null){
                    selector.innerHTML = routes;
                }
            }
            const janitorData = document.getElementById('janitorData');
            if (janitorData) {
                new simpleDatatables.DataTable(janitorData);
            }
            const collectorData = document.getElementById('collectorData');
            if (collectorData) {
                new simpleDatatables.DataTable(collectorData);
            }
            const routeData = document.getElementById('routeData');
            if (routeData) {
                new simpleDatatables.DataTable(routeData);
            }
        }
        $('#popup-table').toggleClass('tohide')
        $('#main-content').toggleClass('tohide')

    }
});

//handle form detail
$('.btn-close-option').click( e => {
    $('#popup-table').toggleClass('tohide')
    $('#main-content').toggleClass('tohide')
})
$('.btn-edit-option').click( e => {
    
})
$('.btn-delete-option').click( e => {
    const result = confirm("Delete this task ?")
    if (result) {
        console.log('Confirm')
    }
})




