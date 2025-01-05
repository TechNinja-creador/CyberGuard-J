document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterBtn = document.getElementById('show-register');
    const showLoginBtn = document.getElementById('show-login');
  
    // Mostrar el formulario de registro
    showRegisterBtn.addEventListener('click', () => {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  
    // Mostrar el formulario de inicio de sesión
    showLoginBtn.addEventListener('click', () => {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    });
  
    // Validación de contraseñas en el registro
    const registerFormElement = document.getElementById('register');
    registerFormElement.addEventListener('submit', (e) => {
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('register-confirm-password').value;
  
      if (password !== confirmPassword) {
        e.preventDefault();
        alert('Las contraseñas no coinciden.');
      }
    });
  });
  