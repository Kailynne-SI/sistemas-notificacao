# Sistema de Notificação

## Descrição do Projeto

Este projeto apresenta o desenvolvimento de um **Sistema de Notificação**, responsável por informar usuários sobre eventos que ocorrem em um sistema. As notificações permitem que os usuários recebam alertas importantes de forma rápida, melhorando a comunicação e a experiência de uso da aplicação.

O sistema foi desenvolvido com base em uma arquitetura cliente-servidor, na qual o backend identifica eventos e envia notificações que são exibidas na aplicação do usuário.

---

## Objetivo

O objetivo deste projeto é demonstrar como um sistema de notificações pode ser implementado em uma aplicação, permitindo que eventos gerados pelo sistema sejam enviados e exibidos aos usuários em tempo real ou sob demanda.

---

## Tecnologias Utilizadas

As seguintes tecnologias podem ser utilizadas para o desenvolvimento do sistema:

* HTML
* CSS
* JavaScript
* Node.js (Backend)
* Git e GitHub para versionamento

---

## Funcionamento do Sistema

O funcionamento do sistema ocorre da seguinte forma:

1. Um evento ocorre dentro do sistema.
2. O backend detecta esse evento.
3. O sistema cria uma notificação.
4. A notificação é enviada ao usuário.
5. O usuário recebe e visualiza a notificação na interface da aplicação.

---

## Arquitetura do Sistema

O sistema segue o modelo **cliente-servidor**, composto pelos seguintes componentes:

### Cliente (Frontend)

Responsável pela interface com o usuário.

Funções principais:

* Exibir notificações
* Permitir interação com o sistema
* Mostrar alertas ou mensagens

Exemplos:

* Aplicação Web
* Aplicação Mobile

---

### Servidor (Backend)

Responsável por processar eventos e gerar notificações.

Funções principais:

* Gerenciar usuários
* Detectar eventos
* Criar notificações
* Enviar notificações aos clientes

---

### Banco de Dados

Utilizado para armazenar informações importantes do sistema, como:

* Dados dos usuários
* Histórico de notificações
* Mensagens enviadas

---

### Serviço de Notificação

Responsável por entregar as notificações aos dispositivos dos usuários.

Exemplos de tecnologias que podem ser utilizadas:

* Firebase Cloud Messaging
* WebSockets
* APIs de notificação

---

## Fluxo de Funcionamento

Fluxo simplificado do sistema:

Usuário
↓
Aplicação (Frontend)
↓
Servidor (Backend)
↓
Serviço de Notificação
↓
Dispositivo do Usuário

---

## Estrutura do Projeto

Estrutura básica do projeto:

```
sistema-notificacao/

README.md

backend/
    server.js
    routes/
    controllers/

frontend/
    index.html
    script.js
    style.css

database/
    schema.sql
```

---

## Como Executar o Projeto

1. Clonar o repositório

```
git clone https://github.com/Kailynne-SI/sistema-notificacao.git
```

2. Entrar na pasta do projeto

```
cd sistema-notificacao
```

3. Instalar dependências (caso utilize Node.js)

```
npm install
```

4. Executar o servidor

```
node server.js
```

---

## Repositório no GitHub

O código do projeto está disponível no seguinte repositório:

https://github.com/Kailynne-SI/sistema-notificacao

---

## Referência

Vídeo utilizado como base para compreensão do funcionamento do sistema:

https://www.youtube.com/watch?v=hffTmMVVdpo

---

## Autora

Kailynne

Projeto desenvolvido para fins acadêmicos.
