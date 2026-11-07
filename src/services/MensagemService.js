import MensagemRepository from "../repositories/MensagemRepository";

export class MensagemService {

  constructor(repository) {
    this.repository = repository;
  }

  getMensagens(contatoId) {
    return this.repository.getMensagens(contatoId);
  }

  enviarMensagem(contatoId, texto) {
    if (!texto.trim()) {
      return;
    }
    const mensagem = {
      id: Date.now(), contatoId, texto: texto.trim(), recebida: false
    };
    this.repository.adicionarMensagem(mensagem);
  }

}
export default new MensagemService(new MensagemRepository());