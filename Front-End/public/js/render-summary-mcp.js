import Mcp from '../assets/fake-data/mcps-data.js'

let tableContent = ""
Mcp.forEach(element => {
    tableContent += 
    `<tr> 
        <td>${element.code}</td> 
        <td>${element.location}</td> 
        <td>${element.capacity}</td> 
        <td>${element.coordinate}</td> 
        <td>${element.state}</td> 
        <td><a href="#">View</a></td> 
    </tr>`
});
if (tableContent != '') {
    const selector = document.querySelector('#mcps-table')
    if (selector != null){
        selector.innerHTML = tableContent;
    }
}