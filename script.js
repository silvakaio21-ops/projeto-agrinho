// Variável para guardar o total de pontos do usuário
let totalPontos = 0;

/**
 * Função que adiciona pontos e atualiza a tela
 * @param {number} valor - Quantidade de pontos a somar
 */
function adicionarPontos(valor) {
    // Soma o valor ao total atual
    totalPontos += valor;
    
    // Altera o texto do HTML com o id "pontuacao" para mostrar o novo valor
    document.getElementById("pontuacao").innerText = totalPontos;
    
    // Um pequeno feedback visual ou mensagem se atingir uma meta
    if (totalPontos >= 100) {
        document.getElementById("pontuacao").innerText = totalPontos + " (Fazenda Sustentável Nota 10! 🏆)";
    }
}

/**
 * Função para reiniciar o jogo/painel
 */
function reiniciarPontos() {
    totalPontos = 0;
    document.getElementById("pontuacao").innerText = totalPontos;
}
