import Vehicle from '../assets/fake-data/vehicles-data.js'

let tableContent = ""
Vehicle.forEach(element => {
    tableContent += 
    `<tr> 
        <td>${element.code}</td> 
        <td>${element.type}</td> 
        <td>${element.size}</td> 
        <td>${element.capacity}</td> 
        <td>${element.location}</td> 
        <td>${element.state}</td> 
        <td><a class='${element.code} view-task-detail' href="#"'>View</a></td> 
    </tr>`
});
if (tableContent != '') {
    $('#vehicles-table').text('Hello world');
    const selector = document.querySelector('#vehicles-table')
    if (selector != null){
        selector.innerHTML = tableContent;
    }
}