class ConversorRomanosParaArabicos {
    private valoresRomanos: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Função para converter número romano para arábico
    public converter(romano: string): number {
        let numeroArabe = 0;
        let valorAnterior = 0;

        // Percorre cada caractere do número romano
        for (let i = romano.length - 1; i >= 0; i--) {
            const caractere = romano[i];
            const valorAtual = this.valoresRomanos[caractere];

            // Se o valor atual for menor que o valor anterior, subtrai
            if (valorAtual < valorAnterior) {
                numeroArabe -= valorAtual;
            } else {
                // Caso contrário, soma
                numeroArabe += valorAtual;
            }

            valorAnterior = valorAtual;
        }

        return numeroArabe;
    }
}

// Exemplo de uso
const conversor = new ConversorRomanosParaArabicos();
const numeroRomano = 'MCMXCIV';  // Exemplo: 1994
const numeroArabe = conversor.converter(numeroRomano);

console.log(`Número romano: ${numeroRomano}`);
console.log(`Número arábico: ${numeroArabe}`);
