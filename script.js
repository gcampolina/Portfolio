document.addEventListener("DOMContentLoaded", function() {
    const text = "Criando soluções inovadoras para o seu negócio.";
    
    const cursorElement = document.getElementById('cursor');
    
    let index = 0;
    
    function typeLetter() {
        if (index < text.length) {
            cursorElement.before(text.charAt(index));
            index++;
            setTimeout(typeLetter, 30);
        } 
    }

    typeLetter();
});



/* ROW */
function moveSlide(direction) {
    const carousel = document.querySelector('.row');
    carousel.scrollBy({ left: direction * 200, behavior: 'smooth' }); // Ajuste o valor de 200 conforme necessário
  }
  