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