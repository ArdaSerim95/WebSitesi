const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // İkon değiştirme
    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});