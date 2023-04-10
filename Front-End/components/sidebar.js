
$(document).ready(function(){

    $("#layoutSidenav").prepend(
        '<div id="layoutSidenav_nav"> \
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion"> \
                <div class="sb-sidenav-menu"> \
                    <div class="nav"> \
                        <div class="sb-sidenav-menu-heading">Core</div> \
                        <a class="nav-link" href="index.html"> \
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div> \
                            Dashboard \
                        </a> \
                        <a class="nav-link" href="charts.html"> \
                            <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div> \
                            Charts \
                        </a> \
                        <a class="nav-link" href="tasks-management.html"> \
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div> \
                            Tasks Management \
                        </a> \
                        <a class="nav-link" href="mcps-management.html"> \
                            <div class="sb-nav-link-icon"><i class="fas fa-trash"></i></div> \
                            MCPs Management \
                        </a> \
                        <a class="nav-link" href="vehicles-management.html"> \
                            <div class="sb-nav-link-icon"><i class="fas fa-truck"></i></div> \
                            Vehicles Management \
                        </a> \
                    </div> \
                </div> \
                <div class="sb-sidenav-footer"> \
                    <div class="small">Logged in as:</div> \
                    Admin \
                </div> \
            </nav> \
        </div>'
    );
});