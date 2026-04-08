class DoodleJump {
    private posicaoY: number = 100;  // Posição inicial do jogador
    private velocidadeY: number = 0;  // Velocidade vertical
    private gravidade: number = 0.5;  // Gravidade que puxa o jogador para baixo
    private salto: number = -10;  // Velocidade do salto
    private plataformaY: number = 400;  // Posição da plataforma

    // Função para pular
    public pular(): void {
        if (this.posicaoY === this.plataformaY) {
            this.velocidadeY = this.salto;
        }
    }

    // Função para atualizar a física do jogo
    public atualizar(): void {
        this.velocidadeY += this.gravidade;
        this.posicaoY += this.velocidadeY;

        if (this.posicaoY >= this.plataformaY) {
            this.posicaoY = this.plataformaY;
            this.velocidadeY = 0;
        }

        this.exibirPosicao();
    }

    // Função para exibir a posição do jogador
    private exibirPosicao(): void {
        console.clear();
        console.log(`Posição do jogador: ${this.posicaoY}`);
    }
}

// Exemplo de uso
const jogo = new DoodleJump();
jogo.pular();
setInterval(() => jogo.atualizar(), 1000 / 60);  // Atualiza o jogo a 60 FPS
