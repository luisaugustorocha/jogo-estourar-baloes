// Função que adiciona bolas aleatoriamente na tela.
function adicionarBola() {
    
    var bola = document.createElement("div") // Armazena o elemento nesta variável.
    bola.setAttribute("class", "bola"); // Cria uma div com a classe 'bola' definida à ela.
    
    /* Cria um número aleatório para a posição do elemento de 0 a 500.
	   O comando Math.random() gera o número aleatório.
	   O comando Math.floor() pega apenas a parte inteira desse número. */
    var posicaoX = Math.floor(Math.random() * 500);
    var posicaoY = Math.floor(Math.random() * 400);

    // Seta o elemento e posiciona na página de acordo com os números que foram gerados.
    bola.setAttribute("style", "left:" + posicaoX + "px; top:" + posicaoY + "px;");
    
    // Criando a ação de clique.
    bola.setAttribute("onclick", "estourar(this)");
    
    // Adicionando elementos na tela.
    document.body.appendChild(bola);

    /*for(posicaoY = 0; posicaoY = 30; posicaoY++)  {
        document.body.appendChild(bola);
    }*/
}

// Função que estoura as bolinhas
function estourar(objeto) {
    document.body.removeChild(objeto);
}

// Função que inicia o jogo.
function iniciarJogo() {
    var divParar;
    document.getElementById("iniciaJogo").style.display = 'none';
    document.getElementById("encerraJogo").style.display = 'block';
    document.getElementById("pontos").style.display = 'block';
    /*divParar = document.getElementById("encerraJogo").style.position = 'absolute';*/

    setInterval(adicionarBola, 500);
}

// Função que encerra o jogo.
function pararJogo() {
    alert("Parabéns! Você conseguiu " + contador + " pontos!");
    window.location.href = window.location.href;
}