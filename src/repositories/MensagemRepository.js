export default class MensagemRepository {
  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 1,
        texto: "Ei amor, eu te amo muito minha princesa :)",
        recebida: true,
      },
    ];
  }

  getMensagens(contatoId) {
    return this.mensagens.filter((m) => m.contatoId === contatoId);
  }

  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }
}
