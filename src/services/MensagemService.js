import MensagemRepository from "../repositories/MensagemRepository";

export class MensagemService {

  constructor(repository) {
    this.repository = repository;
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    const textoLimpo = texto?.trim();
    if (!textoLimpo) {
      return;
    }
    const mensagem = {
      id: Date.now(), contatoId, texto: textoLimpo, recebida: false
    };
    this.repository.adicionarMensagem(mensagem);
  }

}
export default new MensagemService(new MensagemRepository());
