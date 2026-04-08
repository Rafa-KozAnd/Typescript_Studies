import axios from 'axios';

class AnalisadorLinksQuebrados {
    // Função para verificar se o link está quebrado
    public async verificarLink(url: string): Promise<void> {
        try {
            const resposta = await axios.get(url);
            console.log(`Link válido: ${url} (Status: ${resposta.status})`);
        } catch (erro) {
            if (axios.isAxiosError(erro) && erro.response) {
                console.log(`Link quebrado: ${url} (Status: ${erro.response.status})`);
            } else {
                console.log(`Erro ao acessar o link: ${url}`);
            }
        }
    }

    // Função para verificar múltiplos links
    public async verificarLinks(urls: string[]): Promise<void> {
        for (const url of urls) {
            await this.verificarLink(url);
        }
    }
}

// Exemplo de uso
const linksParaVerificar = [
    'https://www.google.com', 
    'https://www.linkquebradoexemplo.com', 
    'https://www.github.com'
];

const analisador = new AnalisadorLinksQuebrados();
analisador.verificarLinks(linksParaVerificar);
