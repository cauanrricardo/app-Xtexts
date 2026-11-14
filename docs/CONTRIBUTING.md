# Guia de Contribuição — app-Xtexts

Regras para trabalharmos juntas no projeto sem conflitos e com histórico organizado.

---

## 1. Regra de ouro

**Nunca commitar direto na `main` nem na `develop`.** Toda tarefa é feita em uma **branch** própria e entra por **Pull Request (PR)**.

### As branches do projeto

```
feat/xxx ──PR──▶ develop ──PR (quando estável)──▶ main
fix/xxx  ──PR──▶ develop
```

| Branch | O que é | Quem mexe |
|---|---|---|
| `main` | versão **estável**, a que será entregue. Sempre funcionando. | só recebe PR vindo da `develop` |
| `develop` | versão de **integração**: junta o trabalho das duas e é onde testamos tudo junto | recebe PRs das branches de tarefa |
| `feat/...`, `fix/...` etc. | uma tarefa por branch | quem está fazendo a tarefa |

Toda branch de tarefa **nasce da `develop`** e **volta para a `develop`**.

---

## 2. Fluxo de trabalho (passo a passo)

### 2.1 Fazendo uma tarefa

```bash
# 1. Atualizar a develop antes de começar
git checkout develop
git pull

# 2. Criar a branch da tarefa A PARTIR da develop
git checkout -b feat/mensagem-repository

# 3. Programar... depois salvar o trabalho
git add .
git commit -m "feat(repository): cria MensagemRepository com getMensagens e adicionarMensagem"

# 4. Enviar a branch para o GitHub
git push -u origin feat/mensagem-repository
```

5. No GitHub, clicar em **Compare & pull request**.
6. **Atenção:** em **base**, escolher **`develop`** (não `main`!) → descrever o que foi feito → **Create pull request**.
7. A outra pessoa revisa (olha o código, testa se quiser) e clica em **Merge pull request**.
8. Depois do merge, todo mundo atualiza:

```bash
git checkout develop
git pull
```

> Se estiver com pressa, quem abriu o PR pode fazer o merge, mas avise a outra no grupo.

### 2.2 Levando para a main (release)

Só quando a `develop` estiver **estável**: o app abre no Expo Go, a navegação funciona, enviar mensagem funciona e nada está pela metade.

1. No GitHub: **Pull requests → New pull request**.
2. **base: `main`** ← **compare: `develop`**.
3. Título: `release: versão estável com <o que entrou>` → **Create** → **Merge**.
4. Atualizar localmente:

```bash
git checkout main
git pull
git checkout develop
```

> Combinem juntas antes de subir para a `main`. Os dois testam na `develop` primeiro.

---

## 3. Nome das branches

Formato: `tipo/descricao-curta` (minúsculas, palavras separadas por hífen).

| Tipo | Quando usar | Exemplo |
|---|---|---|
| `feat/` | funcionalidade nova | `feat/home-screen` |
| `fix/` | correção de bug | `fix/mensagem-vazia` |
| `style/` | só visual (cores, espaçamento) | `style/balao-mensagem` |
| `refactor/` | reorganizar código sem mudar comportamento | `refactor/service-injecao` |
| `docs/` | documentação | `docs/contributing` |
| `chore/` | configuração, dependências | `chore/instala-navigation` |

---

## 4. Mensagens de commit (Conventional Commits)

Formato:

```
tipo(escopo): descrição no imperativo e em minúsculas
```

- **tipo**: o mesmo da tabela acima (`feat`, `fix`, `style`, `refactor`, `docs`, `chore`)
- **escopo**: a parte do projeto que mudou (`repository`, `service`, `home`, `chat`, `mensagem`, `navigation`)
- **descrição**: o que o commit faz, começando com verbo ("cria", "adiciona", "corrige")

**Exemplos bons:**

```
feat(repository): cria MensagemRepository com array em memória
feat(service): adiciona validação de mensagem vazia
feat(mensagem): cria componente de balão com alinhamento por recebida
feat(home): lista quatro contatos fictícios
feat(navigation): configura stack navigator entre Home e Chat
fix(chat): limpa campo de texto após enviar
style(mensagem): muda cor do balão enviado para verde
docs: adiciona guia de contribuição
```

**Exemplos ruins:**

```
update          ← não diz nada
arrumei coisas  ← vago
WIP             ← não commitar coisa quebrada na branch compartilhada
```

> Commits pequenos e frequentes > um commitzão no final.

---
