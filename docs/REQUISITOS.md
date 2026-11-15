# Requisitos do Projeto — app-Xtexts

App de mensagens simples inspirado no WhatsApp, feito com **React Native + Expo**.

---

## HomeScreen
- [x] Mostrar pelo menos **4 contatos** fictícios
- [x] Cada contato tem **nome** e opção para **abrir a conversa**
- [x] Ao tocar, navegar para o Chat enviando **id** e **nome** como parâmetros

## ChatScreen
- [x] Mostrar o **nome** do contato
- [x] Mostrar a **lista de mensagens**
- [x] Mensagens **enviadas** à **direita**
- [x] Mensagens **recebidas** à **esquerda**
- [x] **Campo de texto** e **botão** para enviar
- [x] Depois de enviar, a mensagem **aparece** e o campo é **limpo**
- [x] **Não** permitir mensagem vazia

## Componente Mensagem
- [x] Componente reutilizável chamado `Mensagem`
- [x] Prop `mensagem`: texto da mensagem
- [x] Prop `recebida`: booleano que define alinhamento e estilo

## MensagemRepository
- [x] Classe que guarda as mensagens em um **array de objetos**
- [x] Cada mensagem tem: `id`, `contatoId`, `texto`, `recebida`
- [x] Método `getMensagens(contatoId)`: retorna as mensagens do contato
- [x] Método `adicionarMensagem(mensagem)`: guarda uma nova mensagem

## MensagemService
- [x] Classe com as regras de negócio
- [x] Método `getMensagens(contatoId)`: consulta as mensagens
- [x] Método `enviarMensagem(contatoId, texto)`: valida, cria e guarda
- [x] As telas usam **só o Service** (nunca o Repository direto)

## Navegação
- [x] Usar **React Navigation** com **Stack Navigator**
- [x] Ir da Home para o Chat passando os dados do contato
- [x] Voltar para a tela anterior
- [x] Usar `navigation.navigate()` e `route.params`

## Regras gerais
- [x] Usar `useState` para atualizar as mensagens
- [x] Sem MQTT, API ou banco de dados: tudo **em memória**
- [x] **Uma única instância** do Service
- [x] Cada conversa mostra **só as mensagens do contato** selecionado
- [x] Não precisa manter as mensagens depois de reiniciar o app

## Estrutura de pastas
- [x] Estrutura criada

```
src/
  screens/
    HomeScreen.js
    ChatScreen.js
  components/
    Mensagem.js
  services/
    MensagemService.js
  repositories/
    MensagemRepository.js
App.js
```

## Entrega
- [x] Grupo de até 3 pessoas
- [ ] Entregar pelo **Classroom** até a data limite

## Escopo entregue
- Front-end completo, com os dados em memória. A parte de comunicação (MQTT/API) não está incluída, o que é permitido pelo enunciado (requisito: sem MQTT, API ou banco de dados).
