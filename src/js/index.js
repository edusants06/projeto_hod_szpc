//selecionar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");// faz uma lista dos botoes
const imagens = document.querySelectorAll('.imagem');// faz uma lista com as imagens
const informacoes1 = document.querySelectorAll('.informacoes');

// identificar o clique do usuario em cada botao (unico)
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        desativarBotaoSelecionado(); //função para remover a classe 'selecionado' do botao

        //marcar o botao clicado com o 'selecionado'
        botao.classList.add('selecionado');

        //remover a imagem do fundo, antes de trocar pela nova ao clicar em outro botao
        desativaImagemFundo();

        //colocar a imagem correspondente ao botao ativo
        imagens[indice].classList.add('ativa');
        
        //trocar as informaçoes junto com a imagem
        desativaClassAtivaInfos();
        informacoes1[indice].classList.add('ativa');




        
    })
})

function desativaClassAtivaInfos() {
    const infoAtiva = document.querySelector('.informacoes.ativa');//se for usar o mesmo nome de uma classe anterior, tem que colocar de onde ela esta herdando pra nao dar conflito.
    infoAtiva.classList.remove('ativa');
}

function desativaImagemFundo() {
    const imagemAtiva = document.querySelector('.ativa');//percorrer o forEach e ve qual div ta com a classe ativa, dps adiciona isso à variavel
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
