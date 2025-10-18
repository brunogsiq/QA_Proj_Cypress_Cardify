````markdown
### ✅ Cenário: Campos obrigatórios preenchidos com sucesso

> **Objetivo:** Verificar se, após o preenchimento completo dos campos obrigatórios, o sistema exibe um **alerta de sucesso** indicando o cadastro do cartão.

```js
it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome + Data de Expiração + CVV + Banco do cartão.`, () =>
{
    // Ação: Clica no botão para adicionar um novo cartão
    cy.contains('button', 'Adicionar').click();

    // Preenche os campos obrigatórios
    cy.get('.bg-zinc-800').eq(0).type('4242424242424242');   // Número do cartão
    cy.get('.bg-zinc-800').eq(1).type('Bruno Siqueira');     // Nome do titular
    cy.get('.bg-zinc-800').eq(2).type('01/49');              // Data de expiração
    cy.get('.bg-zinc-800').eq(3).type('789');                // CVV

    // Seleciona o banco digital (primeira opção)
    cy.get('.transition-all').eq(0).click();

    // Submete o formulário novamente
    cy.contains('button', 'Adicionar').click();

    // Validação: Exibe alerta de sucesso
    cy.get('.alertSucess')
        .should('be.visible')
        .and('contain', 'Cartão cadastrado com sucesso!');
});
````

---

📘 **Resumo do Cenário**

* **Tipo de teste:** Teste de componente (Cypress CT)
* **Componente:** `AddCard`
* **Fluxo:** Preenchimento completo e envio
* **Resultado esperado:**
  Exibição de um alerta `.alertSucess` com a mensagem `"Cartão cadastrado com sucesso!"`

---