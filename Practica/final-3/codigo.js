document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Valores ingresados por el usuario
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value;

    // Validacion
    if (user === "" || pass === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }
});