export default class MensagemRepository {
  constructor() {
    this.mensagens = [
      {
        id: 1,
        contatoId: 1,
        texto: "Ei Ricardo, ce viu a corrida de domingo?",
        recebida: false,
      },
      {
        id: 2,
        contatoId: 1,
        texto:
          "Fala meu amigo, vi sim cara! Corrida sinistra, interlagos é absurdo",
        recebida: true,
      },
      {
        id: 3,
        contatoId: 1,
        texto: "Como sempre, Leclerc dominando né!",
        recebida: false,
      },
      {
        id: 4,
        contatoId: 1,
        texto:
          "Sim, Ferrari é firme viu, vamos ver a próxima juntos e um abraço.",
        recebida: true,
      },
      {
        id: 5,
        contatoId: 1,
        texto: "Combinado, um grande abraço!",
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
