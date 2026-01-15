# Cinexio - Guia de instalação e Execução
O **Cinexio**  é uma web app dedicada à gestão e descoberta de filmes/séries, desenvolvida em **React**, **Node** + **Express** e **MySQL**, totalmente **dockerizada**.

Este guia explica como **clonar**, **configurar** e **executar** o projeto localmente.
---
## Pré-Requisitos
Antes de começar, certifica-te de que tens instalado:
- Docker
- Docker Compose
- Node.js
---
## Clonar o repositório
No terminal, executa:
```bash
git clone https://github.com/Telmo1337/Cinexio/
cd cinexio
```
---
## Estrutura do projeto
```text
cinexio/
      |- backend/               # API
      |- frontend/              # UI
      |- docker-compose.yml
      |- package.json           # Scripts de controlo da app
```
---
## Executar a app (Docker)
O projeto está totalmente dockerizado.
Para arrancar todos os serviços (frontend, backend e base de dados), basta executar o seguinte cmd no terminal do diretório cinexio:
```bash
npm run Cinexio
```
Este comando irá:
- Construir as imagens Docker
- Criar os containers necessários
- Iniciar a app
---
## Aceder à app
Após o arranque, a app ficará disponível:
- **Frontend (UI)**:
[http://localhost:3000](http://localhost:3000)
- **Backend (API)**:
[http://localhost:5050/api/v1](http://localhost:5050/api/v1)
---
## Como parar a app
Para parar todos os containers, porém mantém os dados (MySQL):
```bash
npm run Cinexio-stop
```

