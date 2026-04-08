class JogoDeEquilibrio {
    private posicao: number = 0;  // Posição inicial
    private velocidade: number = 5;  // Velocidade do movimento
    private alturaPlataforma: number = 400;  // Altura da plataforma
    private posicaoLimite: number = 400;  // Limite de movimento para a esquerda e direita

    // Função para movimentar o objeto
    public mover(direcao: string): void {
        if (direcao === "esquerda" && this.posicao > -this.posicaoLimite) {
            this.posicao -= this.velocidade;
        } else if (direcao === "direita" && this.posicao < this.posicaoLimite) {
            this.posicao += this.velocidade;
        }
        this.exibirPosicao();
    }

    // Função para exibir a posição do objeto (simulação visual)
    private exibirPosicao(): void {
        console.clear();
        console.log(`Posição do objeto: ${this.posicao}`);
        if (this.posicao < -this.posicaoLimite || this.posicao > this.posicaoLimite) {
            console.log("O objeto caiu!");
        }
    }
}

// Exemplo de uso
const jogo = new JogoDeEquilibrio();
jogo.mover("esquerda");
jogo.mover("direita");
