document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[placeholder="Username"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');

    const statusMessage = document.createElement('p');
    statusMessage.style.marginTop = '15px';
    statusMessage.style.textAlign = 'center';
    statusMessage.style.color = '#ffffff';
    statusMessage.style.fontSize = '14px';
    form.appendChild(statusMessage);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            statusMessage.textContent = 'Please enter both username and password.';
            statusMessage.style.color = '#ffd6d6';
            return;
        }

        statusMessage.textContent = `Welcome, ${username}! Login submitted successfully.`;
        statusMessage.style.color = '#d4f7d4';
        form.reset();
    });
});
