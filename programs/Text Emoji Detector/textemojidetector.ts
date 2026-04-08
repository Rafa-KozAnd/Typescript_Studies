class DetectorEmojis {
    // Função para detectar emojis no texto
    public detectarEmojis(texto: string): string[] {
        // Expressão regular para encontrar emojis
        const regexEmojis = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B06}\u{2935}\u{2194}]/gu;

        const emojisEncontrados = texto.match(regexEmojis);
        return emojisEncontrados || [];
    }
}

// Exemplo de uso
const detector = new DetectorEmojis();
const texto = "Olá! Como você está? 😄 Estou feliz de ver você! 🎉";

const emojis = detector.detectarEmojis(texto);

if (emojis.length > 0) {
    console.log("Emojis encontrados:", emojis);
} else {
    console.log("Nenhum emoji encontrado.");
}
