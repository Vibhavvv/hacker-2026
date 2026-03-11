document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (!validateForm(username, password)) {
            return;
        }
        
        // Simulate authentication
        authenticateUser(username, password);
    });

    function validateForm(username, password) {
        hideError();
        
        if (username.length < 3) {
            showError('Username must be at least 3 characters long');
            return false;
        }
        
        if (password.length < 6) {
            showError('Password must be at least 6 characters long');
            return false;
        }
        
        return true;
    }

    function authenticateUser(username, password) {
        // Simulate API call
        setTimeout(() => {
            if (username === 'admin' && password === 'password123') {
                showSuccess('Login successful!');
                // Redirect or perform post-login actions
                setTimeout(() => {
                    window.location.href = '/dashboard.html';
                }, 1500);
            } else {
                showError('Invalid username or password');
            }
        }, 1000);
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.className = 'error-message';
    }

    function showSuccess(message) {
        errorMessage.textContent = message;
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#27ae60';
        errorMessage.style.backgroundColor = '#f2fdf2';
    }

    function hideError() {
        errorMessage.className = 'error-hidden';
    }
});