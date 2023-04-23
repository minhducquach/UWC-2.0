$(document).ready(function () {
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const id = getCookie("id");
  $("#layoutSidenav").prepend(
    `<div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <div class="sb-sidenav-menu-heading">Core</div>
                        <a class="nav-link" href="/dashboard" method="get">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Bảng điều khiển
                        </a>
                        <a class="nav-link" href="/tasks" method="get">
                            <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                            Quản lý nhiệm vụ
                        </a>
                        <a class="nav-link" href="/mcps" method="get">
                            <div class="sb-nav-link-icon"><i class="fas fa-trash"></i></div>
                            Quản lý MCP
                        </a>
                        <a class="nav-link" href="/vehicles" method="get">
                            <div class="sb-nav-link-icon"><i class="fas fa-truck"></i></div>
                            Quản lý phương tiện
                        </a>
                        <a class="nav-link" href="/dashboard" method="get">
                        <div class="sb-nav-link-icon"><i class="fa fa-users"></i></div>
                        Quản lý nhân lực
                    </a>
                    <a class="nav-link" href="/dashboard" method="get">
                        <div class="sb-nav-link-icon"><i class="fa fa-user-circle"></i></div>
                        Quản lý tài khoản
                    </a>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">Logged in as:</div>
                    ${id}
                </div>
            </nav>
        </div>`
  );
});
