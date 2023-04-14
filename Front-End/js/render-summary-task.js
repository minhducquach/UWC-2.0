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
        <td><a class='${element.code} view-task-detail' href="#">View</a></td> 
    </tr>`
});
if (tableContent != '') {
    const selector = document.querySelector('#tasks-table')
    if (selector != null){
        selector.innerHTML = tableContent;
    }
}
$(document).ready(function(){
    $('.view-task-detail').click( event => {
        event.preventDefault()
        const taskCode = event.currentTarget.classList[0]
        console.log(taskCode)

        const result = Task.find(({code}) => {
            return code === taskCode
        })
        window.location.href = '/task-detail.html'
    })
})


