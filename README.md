# app-Xtexts

App de mensagens simples inspirado no WhatsApp, feito com **React Native + Expo** para a disciplina de Desenvolvimento Mobile.

Tudo funciona **em memória**: não há API, MQTT nem banco de dados, e as mensagens somem ao reiniciar o app.

## Funcionalidades

- **Home:** lista de contatos fictícios; ao tocar, abre a conversa.
- **Chat:** mensagens enviadas à direita e recebidas à esquerda, campo de texto e botão de enviar. Mensagens vazias não são enviadas.
- Cada conversa mostra apenas as mensagens do contato selecionado.

## Tecnologias

- React Native + Expo
- React Navigation (Stack Navigator)
- JavaScript

## Arquitetura

```
Telas / Componentes  →  MensagemService  →  MensagemRepository
```

- **Repository:** guarda e busca as mensagens, sem validação.
- **Service:** regras de negócio (valida e cria a mensagem). Existe uma única instância, compartilhada entre as telas.
- **Telas e componentes:** só desenham a interface e acessam os dados pelo Service.

## Estrutura de pastas

```
src/
  screens/        HomeScreen.js, ChatScreen.js
  components/     Mensagem.js
  services/       MensagemService.js
  repositories/   MensagemRepository.js
App.js
```

## Como rodar

```bash
npm install
npx expo start
```

Depois, abra no celular com o app **Expo Go** (lendo o QR code) ou em um emulador.

## Documentação

- [Requisitos](docs/REQUISITOS.md)
- [Divisão de tarefas](docs/DIVISAO-TAREFAS.md)
- [Guia de contribuição](docs/CONTRIBUTING.md)

## Equipe

- **Cauan Ricardo** — [@cauanrricardo](https://github.com/cauanrricardo)
- **Radlei Doroth** — [@radleidoroth](https://github.com/radleidoroth)
