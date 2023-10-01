const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    desSelecionarBotao();
    desSelecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[i].classList.add("selecionado");
  });
});
function desSelecionarPersonagem() {
  const personagemSelecionado = document.querySelector(
    ".personagem.selecionado"
  );
  personagemSelecionado.classList.remove("selecionado");
}

function desSelecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
