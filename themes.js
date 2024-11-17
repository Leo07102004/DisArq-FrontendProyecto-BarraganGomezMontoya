document.getElementById('logout').addEventListener('click', function() {
    sessionStorage.clear(); // Limpia el sessionStorage
    window.location.href = 'index.html'; // Redirige al index.html
});
