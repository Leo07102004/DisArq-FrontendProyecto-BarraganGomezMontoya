function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Datos a enviar en la solicitud POST
    const data = {
        email: email,
        password: password
    };

    // Configurar la solicitud Fetch
    const url = "http://127.0.0.1:8000/api/login";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(email + ':' + password)
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en el inicio de sesión. Verifica tus credenciales.');
        }
    })
    .then(data => {
        // Procesar la respuesta exitosa
        console.log('Inicio de sesión exitoso:', data);
        sessionStorage.setItem('token', data.token);

        // Redirigir al usuario a themes.html
        window.location.href = "themes.html";
    })
    .catch(error => {
        // Capturar y mostrar errores en la consola
        console.error('Error:', error);
        alert(error.message); // Opcional: Mostrar alerta al usuario
    });
}

function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar contraseñas coinciden
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Datos a enviar en la solicitud POST
    const data = {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
    };

    // Configurar la solicitud Fetch
    const url = "http://127.0.0.1:8000/api/register";
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error al registrar el usuario');
        }
    })
    .then(data => {
        // Procesar la respuesta exitosa
        console.log('Registro exitoso:', data);
        alert('Registro completado con éxito, iniciando sesión.');
        
        // Redirigir a themes.html
        window.location.href = "themes.html";
    })
    .catch(error => {
        // Capturar y mostrar errores
        console.error('Error:', error);
        alert(error.message);
    });
}
