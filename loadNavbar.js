document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveLink();
        })
        .catch(error => console.error('Erro ao carregar a barra de navegação:', error));
});

function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const links = document.querySelectorAll('.sidebar a');

    links.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
