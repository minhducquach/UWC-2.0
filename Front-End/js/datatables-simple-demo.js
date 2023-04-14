window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
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
});
