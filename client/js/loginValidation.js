//Si el cliente no está logueado e intenta entrar al carrito, se lo redirige al login.
if (!window.sessionStorage.getItem('userLogged') &&
    window.location.href == 'http://localhost:3000/html/carrito.html') {

    alert('Primero debes iniciar sesión!')
    window.location.href = 'http://localhost:3000/html/login.html';
}

//Si el cliente esta logueado, se cambia el botón login por logout y se agrega un listener
if (window.sessionStorage.getItem('userLogged')) {
    let login = document.getElementById('login');
    let signUp = document.getElementById('signUp-btn');
    login.addEventListener('click', logout);
    login.innerHTML = '<a href="index.html"><span class="glyphicon glyphicon-log-in"></span> Logout</a>';

    signUp.innerHTML = `<a href="#"><span class="glyphicon glyphicon-user"></span> Bienvenido!</a>`
}

//funcion para cerrar sesión y eliminar datos en session y local storage
function logout() {
    window.sessionStorage.clear();
    alert('Has cerrado sesión con éxito, hasta luego!')
}

//si el cliente es admin se le muestra el formulario para agregar stock o productos

if(window.sessionStorage.getItem('admin') === 'true' && window.location.href == 'http://localhost:3000/productos.html'){
    console.log('halaaaa')
    let showHidden = document.getElementById('ocultar');
    showHidden.id = 'show';

    showHidden = document.getElementById('inputId');
    showHidden.type = 'show';

    showHidden = document.getElementById('inputStack');
    showHidden.type = 'show';
}