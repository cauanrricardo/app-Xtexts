# Requisitos do Projeto — app-Xtexts

App de mensagens simples inspirado no WhatsApp, feito com **React Native + Expo**.

---

## HomeScreen
- [ ] Mostrar pelo menos **4 contatos** fictícios
- [ ] Cada contato tem **nome** e opção para **abrir a conversa**
- [ ] Ao tocar, navegar para o Chat enviando **id** e **nome** como parâmetros

## ChatScreen
- [ ] Mostrar o **nome** do contato
- [ ] Mostrar a **lista de mensagens**
- [ ] Mensagens **enviadas** à **direita**
- [ ] Mensagens **recebidas** à **esquerda**
- [ ] **Campo de texto** e **botão** para enviar
- [ ] Depois de enviar, a mensagem **aparece** e o campo é **limpo**
- [ ] **Não** permitir mensagem vazia

## Componente Mensagem
- [ ] Componente reutilizável chamado `Mensagem`
- [ ] Prop `mensagem`: texto da mensagem
- [ ] Prop `recebida`: booleano que define alinhamento e estilo

## MensagemRepository
- [ ] Classe que guarda as mensagens em um **array de objetos**
- [ ] Cada mensagem tem: `id`, `contatoId`, `texto`, `recebida`
- [ ] Método `getMensagens(contatoId)`: retorna as mensagens do contato
- [ ] Método `adicionarMensagem(mensagem)`: guarda uma nova mensagem

## MensagemService
- [ ] Classe com as regras de negócio
- [ ] Método `getMensagens(contatoId)`: consulta as mensagens
- [ ] Método `enviarMensagem(contatoId, texto)`: valida, cria e guarda
- [ ] As telas usam **só o Service** (nunca o Repository direto)

## Navegação
- [ ] Usar **React Navigation** com **Stack Navigator**
- [ ] Ir da Home para o Chat passando os dados do contato
- [ ] Voltar para a tela anterior
- [ ] Usar `navigation.navigate()` e `route.params`

## Regras gerais
- [ ] Usar `useState` para atualizar as mensagens
- [ ] Sem MQTT, API ou banco de dados: tudo **em memória**
- [ ] **Uma única instância** do Service
- [ ] Cada conversa mostra **só as mensagens do contato** selecionado
- [ ] Não precisa manter as mensagens depois de reiniciar o app

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
- [ ] Grupo de até 3 pessoas
- [ ] Entregar pelo **Classroom** até a data limite
