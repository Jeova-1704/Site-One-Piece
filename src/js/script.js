// Pegando elementos do HTML dos botões e imagens
const botoesImagens = document.querySelectorAll('.botao');
const personagem = document.querySelectorAll('.personagem');

// Identificando o clique do usuário
botoesImagens.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaSelecionado();
        selecionarBotaoImagens(botao);
        esconderPersonagemAtiva();
        mostrarPersonagem(indice);
    });
});

function desativarBotaSelecionado() {
    const botoesSelecionados = document.querySelectorAll('.botao.selecionado');
    botoesSelecionados.forEach(botao => {
        botao.classList.remove('selecionado');
    });
}

function selecionarBotaoImagens(botao) {
    botao.classList.add('selecionado');
}

function esconderPersonagemAtiva() {
    const personagensAtivos = document.querySelectorAll('.personagem.selecionado');
    personagensAtivos.forEach(personagemAtivo => {
        personagemAtivo.classList.remove('selecionado');
    });
}

function mostrarPersonagem(indice) {
    personagem[indice].classList.add('selecionado');
}
