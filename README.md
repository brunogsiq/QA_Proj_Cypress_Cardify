````markdown
# 🧪 Domine os Testes de Componentes com Cypress

> **Projeto prático:** Cardify — Fintech de carteiras digitais.  
> Curso: *Domine os Testes de Componentes com Cypress e conquiste o controle da qualidade em aplicações modernas.*

Link: https://www.udemy.com/course/testando-componentes-com-cypress/
Profº: Fernando Papito 

![Interface do Projeto](./src/assets/demo-add-card.png)

---

## ⚙️ Status & Badges

![Node.js](https://img.shields.io/badge/node-%3E%3D18.0-green?logo=node.js&logoColor=white)
![Cypress](https://img.shields.io/badge/cypress-13%2B-brightgreen?logo=cypress&logoColor=white)
![React](https://img.shields.io/badge/react-18%2B-61DAFB?logo=react&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)
![Build](https://img.shields.io/badge/build-passing-success)
![Status](https://img.shields.io/badge/status-active-success)

---

## 📑 Sumário

1. [📘 Visão Geral](#-visão-geral)  
2. [🎯 O que você vai aprender](#-o-que-você-vai-aprender)  
3. [🧩 Funcionalidade em foco](#-funcionalidade-em-foco)  
4. [🧠 Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)  
5. [🧱 Estrutura do Projeto](#-estrutura-do-projeto)  
6. [🧪 Exemplo de Teste de Componente](#-exemplo-de-teste-de-componente)  
7. [🚀 Executando o Projeto Localmente](#-executando-o-projeto-localmente)  
8. [🧾 Requisitos](#-requisitos)  
9. [⚖️ Licença](#️-licença)  
10. [📸 Demonstração](#-demonstração)  
11. [💡 Dica](#-dica)

---

## 📘 Visão Geral

Este repositório faz parte de um curso imersivo de **Quality Assurance com Cypress**, onde você assume o papel de QA na **Cardify**, uma fintech moderna focada em carteiras digitais que gerenciam múltiplos cartões de crédito.

O objetivo é dominar **Testes de Componentes com Cypress**, garantindo qualidade *bulletproof* em aplicações **React** e aplicando estratégias inteligentes de automação que vão além dos testes End-to-End.

---

## 🎯 O que você vai aprender

- Como configurar o **Cypress Component Testing** do zero.  
- Criar **testes isolados** para componentes React com cenários reais.  
- Definir **localizadores robustos** (`data-cy`) e manter os testes resilientes.  
- Simular requisições de API com `cy.intercept()`.  
- Controlar diferentes estados de componentes com *mocking*.  
- Validar estilos, mensagens de erro e feedbacks visuais.  
- Entender diferenças entre testes **E2E** e **CT (Component Testing)**.  
- Adquirir autonomia como QA em times ágeis com aplicações modernas.

---

## 🧩 Funcionalidade em foco

### Adicionar Novo Cartão

Formulário para cadastro e visualização em tempo real de cartões digitais.

| Campo | Descrição |
|-------|------------|
| Número do Cartão | Entrada numérica formatada |
| Nome do Titular | Texto obrigatório |
| Validade | Mês/Ano com validação automática |
| CVV | 3 ou 4 dígitos numéricos |
| Banco Digital | Seleção de bandeira/banco (Nubank, Inter, Neon, C6, Will Bank, Outro) |

---

## 🧠 Tecnologias e Ferramentas

| Categoria | Ferramenta |
|------------|-------------|
| Framework de Testes | **Cypress 13+ (Component Testing)** |
| Frontend | **React + Vite** |
| Estilização | **Tailwind CSS** |
| Controle de Versão | **Git + GitHub** |
| Gerenciamento de Pacotes | **Node.js + npm** |
| Linter e Formatação | ESLint + PostCSS |
| Execução | `vite dev` / `npm run cy:open` |

---

## 🧱 Estrutura do Projeto

```bash
QA_Proj_Cypress_Cardify/
│
├── src/
│   ├── assets/brands/          # Logos dos bancos e ícones
│   ├── components/             # Componentes reutilizáveis (Header, Footer, CardPreview)
│   ├── pages/                  # Páginas principais (AddCard, Landing, Upgrade)
│   ├── services/               # cardService.js → lógica de API
│   ├── utils/                  # Validações e helpers (cardValidation, bankColors)
│   ├── index.css               # Estilos globais (Tailwind)
│   ├── App.jsx / main.jsx      # Entrada do app React
│
├── cypress/
│   ├── fixtures/               # Massas de teste
│   ├── support/                # Commands e configuração do CT
│   └── component-tests/        # AddCard.cy.jsx (testes de componentes)
│
├── public/                     # Ícones, favicon, manifest
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind
├── package.json                # Dependências do projeto
└── README.md
````

---

## 🧪 Exemplo de Teste de Componente

```js
context('1 - Teste de Componentes: AddCard', () => {
  beforeEach(() => {
    cy.mount(<AddCard />)
  });

  it('1.1 - Campos obrigatórios não preenchidos', () => {
    cy.contains('button', 'Adicionar').click();

    const alerts = [
      'Número do cartão é obrigatório',
      'Nome do titular é obrigatório',
      'Data de expiração é obrigatória',
      'CVV é obrigatório',
      'Selecione um banco'
    ];

    alerts.forEach(alert => {
      cy.contains('.alert-error', alert).should('be.visible');
    });
  });
});
```

---

## 🚀 Executando o Projeto Localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/SeuUsuario/QA_Proj_Cypress_Cardify.git
cd QA_Proj_Cypress_Cardify
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Execute o projeto React

```bash
npm run dev
```

### 4️⃣ Abra o Cypress Component Testing

```bash
npm run cy:open
```

---

## 🧾 Requisitos

* **Node.js** e **npm** instalados
* **Visual Studio Code** (recomendado)
* Conhecimento básico em Cypress
* **Git Bash** ou terminal compatível

---

## ⚖️ Licença

Distribuído sob a licença **MIT**.
Sinta-se à vontade para usar o conteúdo como base de aprendizado ou referência profissional.

---

## 📸 Demonstração

![Adicionar Novo Cartão](./src/assets/demo-add-card.png)

> *Preencha os dados e veja a visualização do cartão em tempo real.*

---

## 💡 Dica

> Utilize os comandos customizados (`cy.preencheDadosCartao()` e `cy.enviaDadosCartao()`) para criar testes limpos, reutilizáveis e altamente legíveis.

---

**QA_Proj_Cypress_Cardify © 2025 — Criado para demonstrar o poder dos testes de componentes com Cypress.**

```