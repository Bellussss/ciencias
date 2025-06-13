document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll(".card").forEach((c)=>{
                if (c !== card) {
                    c.classList.remove("is-flipped");
                }
            });  card.classList.toggle('is-flipped');
        });
    });
});


function mostrarImagem(caminho) {
    const img = document.getElementById('imagemSelecionada');
    img.src = caminho;
    img.style.display = 'block';
}

.botaoDev1.addEventListener('onclick')