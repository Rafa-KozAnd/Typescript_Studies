import { Howl } from 'howler';

class RelogioPomodoro {
    private tempoTrabalho: number = 25 * 60; // 25 minutos em segundos
    private tempoDescanso: number = 5 * 60; // 5 minutos em segundos
    private tempoRestante: number = this.tempoTrabalho;
    private cicloAtivo: boolean = false;
    private intervalo: NodeJS.Timeout | null = null;

    private somTrabalho: Howl = new Howl({
        src: ['https://www.soundjay.com/button/beep-07.wav'], // Exemplo de som de trabalho
        volume: 1.0
    });

    private somDescanso: Howl = new Howl({
        src: ['https://www.soundjay.com/button/beep-09.wav'], // Exemplo de som de descanso
        volume: 1.0
    });

    // Função para iniciar o ciclo Pomodoro
    public iniciarCiclo(): void {
        if (this.cicloAtivo) return;

        this.cicloAtivo = true;
        this.tempoRestante = this.tempoTrabalho;
        this.contarTempo();
    }

    // Função para contar o tempo e alternar entre trabalho e descanso
    private contarTempo(): void {
        this.intervalo = setInterval(() => {
            if (this.tempoRestante > 0) {
                this.tempoRestante--;
                this.exibirTempo();
            } else {
                if (this.tempoRestante === 0) {
                    if (this.cicloAtivo) {
                        this.somTrabalho.play(); // Toca o som de fim de ciclo de trabalho
                        this.cicloAtivo = false;
                        this.tempoRestante = this.tempoDescanso;
                        console.log('Fim do ciclo de trabalho. Hora de descansar!');
                    } else {
                        this.somDescanso.play(); // Toca o som de fim de ciclo de descanso
                        this.tempoRestante = this.tempoTrabalho;
                        console.log('Fim do descanso. Hora de voltar ao trabalho!');
                    }
                    this.contarTempo();
                }
            }
        }, 1000);
    }

    // Exibe o tempo restante em formato mm:ss
    private exibirTempo(): void {
        const minutos = Math.floor(this.tempoRestante / 60);
        const segundos = this.tempoRestante % 60;
        console.log(`Tempo restante: ${this.formatarTempo(minutos)}:${this.formatarTempo(segundos)}`);
    }

    // Formata o tempo com dois dígitos
    private formatarTempo(tempo: number): string {
        return tempo < 10 ? `0${tempo}` : `${tempo}`;
    }

    // Função para parar o ciclo atual
    public pararCiclo(): void {
        if (this.intervalo) {
            clearInterval(this.intervalo);
        }
        this.cicloAtivo = false;
        console.log('Ciclo interrompido.');
    }
}

// Exemplo de uso
const pomodoro = new RelogioPomodoro();
pomodoro.iniciarCiclo(); // Inicia o ciclo Pomodoro

// Para interromper o ciclo, use:
// pomodoro.pararCiclo();
