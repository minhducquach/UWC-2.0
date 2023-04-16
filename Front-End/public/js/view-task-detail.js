import Task from '../assets/fake-data/tasks-data.js'

const taskCode = 'TASK0001'
const result = Task.find(({code}) => {
    return code === taskCode
})
console.log(result)


if (result){
    // Render short content
    let short_content = 
    `<div class="popup-content">
        <div>Task ID: ${result.code}</div>    
    </div>
    <div class="popup-content">
        <div>Description: ${result.description}</div>  
    </div>
    <div class="popup-content">
        <div>Start Date: ${result.startTime} ${result.startDate}</div>
    </div>`
    document.querySelector('.short-content').innerHTML = short_content
    // Render janitor table
    let janitors = ""
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
    if (janitors != '') {
        const selector = document.querySelector('#janitors-table')
        console.log(selector)
        if (selector != null){
            selector.innerHTML = janitors;
        }
    }
    // Render collector table
    let collectors = ""
    result.collector.forEach(element => {
        collectors += 
        `<tr>
            <th>${element.name}</th>
            <th>${element.address}, Phuong ${element.ward}, Quan ${element.district}</th>
            <th>${element.phone}</th>
            <th>${element.vehicle}</th>
        </tr>`
    });
    if (collectors != '') {
        const selector = document.querySelector('#collectors-table')
        console.log(selector)
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
        console.log(selector)
        if (selector != null){
            selector.innerHTML = routes;
        }
    }

}

