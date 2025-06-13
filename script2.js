const desenvolvedor = document.querySelectorAll('.botaoCredito[data-alvo]');
const imagens = document.querySelectorAll('.imagem');

desenvolvedor.forEach(botao => {
  botao.addEventListener('click', () => {
    const idAlvo = botao.getAttribute('data-alvo');

    imagens.forEach(img => img.classList.remove('ativa'));

    const imagemParaMostrar = document.getElementById(idAlvo);
    if (imagemParaMostrar) {
      imagemParaMostrar.classList.add('ativa');
    }
  });
});