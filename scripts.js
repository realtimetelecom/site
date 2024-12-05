function showSolutions(category) {
    document.querySelectorAll('.solutions').forEach(section => {
        section.style.display = 'none';
    });
    const section = document.getElementById(category);
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

function toggleTheme() {
    const body = document.body;
    const toggleIcon = document.querySelector("#theme-toggle i");

    // Alterna a classe 'dark-theme' no body
    body.classList.toggle("dark-theme");

    // Altera o ícone do botão com base no tema atual
    if (body.classList.contains("dark-theme")) {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
    } else {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    }
}
