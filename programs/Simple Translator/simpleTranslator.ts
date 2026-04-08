import axios from 'axios';

class TradutorSimples {
    private urlAPI: string = 'https://translation.googleapis.com/language/translate/v2';
    private chaveAPI: string = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API do Google Cloud

    // Função para traduzir o texto
    public async traduzirTexto(texto: string, idiomaOrigem: string, idiomaDestino: string): Promise<string> {
        try {
            const resposta = await axios.post(this.urlAPI, {
                q: texto,
                source: idiomaOrigem,
                target: idiomaDestino,
                key: this.chaveAPI
            });
            const textoTraduzido = resposta.data.data.translations[0].translatedText;
            return textoTraduzido;
        } catch (erro) {
            console.error('Erro ao traduzir o texto:', erro);
            return 'Erro na tradução.';
        }
    }
}

// Exemplo de uso
const tradutor = new TradutorSimples();
const textoOriginal = 'Olá, como você está?';
const idiomaOrigem = 'pt';  // pt para português
const idiomaDestino = 'en'; // en para inglês

tradutor.traduzirTexto(textoOriginal, idiomaOrigem, idiomaDestino)
    .then((resultado) => {
        console.log(`Texto original: ${textoOriginal}`);
        console.log(`Texto traduzido: ${resultado}`);
    });
