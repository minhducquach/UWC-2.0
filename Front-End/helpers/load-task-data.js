import Task from '../assets/fake-data/tasks-data.js'

let tableContent = ""
Task.forEach(element => {
    tableContent += 
    `<tr> 
        <td>${element.code}</td> 
        <td>${element.description}</td> 
        <td>${element.startDate}</td> 
        <td>${element.startTime}</td> 
        <td>${element.state}</td> 
        <td><a href="#">View</a></td> 
    </tr>`
});
if (tableContent != '') {
    const selector = document.querySelector('#tasks-table')
    if (selector != null){
        selector.innerHTML = tableContent;
    }
}