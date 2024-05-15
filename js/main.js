
document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'dark-mode') {
            switchButton.checked = true;
        }
    }

    switchButton.addEventListener('change', () => {
        if (switchButton.checked) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});