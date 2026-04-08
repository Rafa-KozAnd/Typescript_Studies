class JogoDeCombinacaoDeCores {
    private tabuleiro: string[][] = [];
    private cores: string[] = ["red", "blue", "green", "yellow", "purple"];
    private tamanhoTabuleiro: number = 5;

    // Função para inicializar o tabuleiro com cores aleatórias
    public inicializarTabuleiro(): void {
        for (let i = 0; i < this.tamanhoTabuleiro; i++) {
            this.tabuleiro[i] = [];
            for (let j = 0; j < this.tamanhoTabuleiro; j++) {
                const corAleatoria = this.cores[Math.floor(Math.random() * this.cores.length)];
                this.tabuleiro[i].push(corAleatoria);
            }
        }
        this.exibirTabuleiro();
    }

    // Função para exibir o tabuleiro
    private exibirTabuleiro(): void {
        console.clear();
        this.tabuleiro.forEach(linha => {
            console.log(linha.join(" | "));
        });
    }

    // Função para tentar combinar dois blocos
    public combinarBlocos(linha1: number, coluna1: number, linha2: number, coluna2: number): void {
        if (this.tabuleiro[linha1][coluna1] === this.tabuleiro[linha2][coluna2]) {
            console.log("Blocos combinados!");
            this.tabuleiro[linha1][coluna1] = "";
            this.tabuleiro[linha2][coluna2] = "";
        } else {
            console.log("Blocos diferentes, tente novamente.");
        }
        this.exibirTabuleiro();
    }
}

// Exemplo de uso
const jogo = new JogoDeCombinacaoDeCores();
jogo.inicializarTabuleiro();
jogo.combinarBlocos(0, 0, 0, 1);  // Tente combinar dois blocos
