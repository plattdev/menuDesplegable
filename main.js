// 1. Encuentra el botón por su id
const btnMenu = document.getElementById('btn-menu');

// 2. Añade el evento clic directamente
btnMenu.onclick = () => {
    // cambiar el style del menú desplegable a display:none/block
    const menuDesplegable = document.getElementById('nav');
    if (menuDesplegable.style.display === 'block') {
        menuDesplegable.style.display = 'none';
    } else {
        menuDesplegable.style.display = 'block';
    }
};