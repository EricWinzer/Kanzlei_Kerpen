const sidebarbox = document.getElementById('navbarWrapper');
const sidebar = document.getElementById('navbar-inline');
let navbarHeight = window.innerHeight;
let navbarWidth = window.innerWidth / 4;
let menustatus = false;
let x, y;
let path = 'M 0 0 L 100 0 Q 100 ' + ((navbarHeight / 100) * 25) + ' 100 ' + (navbarHeight / 2) + ' Q 100 ' + ((navbarHeight / 100) * 75) + ' 100 ' + navbarHeight + ' L 0 ' + navbarHeight + ' z';

// Übergabe Pfad an SVG
sidebar.setAttribute("d", path);

// Mauszeigerbewegung
document.onmousemove = function () {
    x = event.clientX;
    y = event.clientY;
    if (x <= 300) {
        path = 'M 0 0 L 100 0 Q 130 ' + (y - 150) + ' 130 ' + y + ' Q 130 ' + (y + 150) + ' 100 ' + navbarHeight + ' L 0 ' + navbarHeight + ' z';
    } else {
        path = 'M 0 0 L 100 0 Q 100 ' + (y - 150) + ' 100 ' + y + ' Q 100 ' + (y + 150) + ' 100 ' + navbarHeight + ' L 0 ' + navbarHeight + ' z';
    }

    if (!menustatus) {
        sidebar.setAttribute("d", path);
    }
};

sidebarbox.addEventListener('click', function () {
    if (!menustatus) {
        open();
    } else {
        close();
    }
});

function open() {
    path = 'M 0 0 L ' + navbarWidth + ' 0 Q ' + navbarWidth + ' ' + ((navbarHeight / 100) * 25) + ' ' + navbarWidth + ' ' + (navbarHeight / 2) + ' Q ' + navbarWidth + ' ' + ((navbarHeight / 100) * 75) + ' ' + navbarWidth + ' ' + navbarHeight + ' L 0 ' + navbarHeight + ' z';
    sidebar.setAttribute("d", path);
    sidebarbox.classList.add('sidebar-open');
    menustatus = true;
};

function close() {
    path = 'M 0 0 L 100 0 Q 100 ' + (y - 150) + ' 100 ' + y + ' Q 100 ' + (y + 150) + ' 100 ' + navbarHeight + ' L 0 ' + navbarHeight + ' z';
    sidebar.setAttribute("d", path);
    sidebarbox.classList.remove('sidebar-open');
    menustatus = false;
};
