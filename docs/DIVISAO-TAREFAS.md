# Divisão de Responsabilidades — app-Xtexts

**Equipe:**
- **Cauan Ricardo** — [@cauanrricardo](https://github.com/cauanrricardo)
- **Radlei Doroth** — [@radleidoroth](https://github.com/radleidoroth)

---

## 1. Divisão

### Cauan Ricardo — Dados + Navegação + Integração

| Branch | Arquivo | O que faz |
|---|---|---|
| `feat/mensagem-repository` | `src/repositories/MensagemRepository.js` | array em memória, `getMensagens`, `adicionarMensagem` (+ 1 ou 2 mensagens recebidas de exemplo) |
| `feat/mensagem-service` | `src/services/MensagemService.js` | valida mensagem vazia, `enviarMensagem`, exporta **instância única** |
| `feat/navigation` | `App.js` | Stack Navigator Home → Chat, título do Chat com o nome do contato |
| — | — | revisar PRs da Radlei, testar tudo na `develop`, subir para a `main` |

### Radlei Doroth — Interface

| Branch | Arquivo | O que faz |
|---|---|---|
| `feat/componente-mensagem` | `src/components/Mensagem.js` | balão com props `mensagem` e `recebida` (esquerda/direita) |
| `feat/home-screen` | `src/screens/HomeScreen.js` | 4 contatos com FlatList + `navigation.navigate('Chat', { contatoId, nome })` |
| `feat/chat-screen` | `src/screens/ChatScreen.js` | `route.params`, lista com `useState`, campo + botão, limpa o campo após enviar |

> O Cauan tem arquivos menores, mas fica com a **integração** (juntar tudo, testar, resolver conflitos e fazer a release para a `main`).

---

## 2. Por que ninguém trava

- A Radlei começa pelo `Mensagem.js` e pela `HomeScreen`, que **não dependem** de nada do Cauan.
- Quando ela chegar na `ChatScreen`, o Service já deve estar pronto (são os arquivos mais curtos). Se não estiver, ela escreve seguindo o **contrato** abaixo e testa depois que o PR do Cauan entrar.
- A `HomeScreen` só dá para testar no celular depois do `App.js`, então o Cauan faz o `App.js` **logo depois do Service**.

### Contrato entre as camadas

```js
// Formato de uma mensagem
{ id: 1, contatoId: 2, texto: "Oi!", recebida: true }

// O que o Service oferece às telas
import mensagemService from '../services/MensagemService';
mensagemService.getMensagens(contatoId)          // retorna array de mensagens do contato
mensagemService.enviarMensagem(contatoId, texto) // valida, cria e guarda

// Componente
<Mensagem mensagem="Oi!" recebida={true} />
```

---

### Teste final (prova os requisitos 17 e 18)

1. Abrir a conversa com a **Ana** e enviar uma mensagem.
2. Voltar e abrir o **Bruno** → deve estar **sem** a mensagem da Ana.
3. Voltar para a **Ana** → a mensagem **continua lá**.
4. Tentar enviar mensagem vazia (ou só espaços) → **não** deve aparecer nada.

---

## 3. Dica: Issues no GitHub

Criar uma Issue para cada linha da divisão (seção 1) e atribuir à pessoa responsável. No PR, escrever `Closes #N` na descrição para a issue fechar automaticamente no merge.

Regras de branch e commit: ver [`CONTRIBUTING.md`](./CONTRIBUTING.md).
