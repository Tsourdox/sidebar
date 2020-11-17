window.addEventListener('load', main);

function main() {
    const button = document.querySelector('button');
    button.addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
    const root = document.querySelector(':root');
    const sidebarWidth = root.style.getPropertyValue('--sidebar-width');
    
    if (sidebarWidth === '0') {
        root.style.setProperty('--sidebar-width', null);
    } else {
        root.style.setProperty('--sidebar-width', '0');
    }
}