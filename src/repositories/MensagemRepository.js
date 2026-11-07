export default class MensagemRepository {
  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 1,
        texto: "Ei amor, eu te amo muito minha princesa :)",
        recebida: true,
      },
      {
        id: 2,
        contatoId: 1,
        texto: "Eu também te amo muito, meu amor ❤️",
        recebida: false,
      },
      {
        id: 3,
        contatoId: 1,
        texto: "Como foi o seu dia, minha princesa?",
        recebida: true,
      },
      {
        id: 4,
        contatoId: 1,
        texto: "Foi ótimo! Depois te conto tudo ta amorzin",
        recebida: false,
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
