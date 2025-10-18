import React from 'react'
import AddCard from './AddCard';

let contexto = 1;
let cenario = 1;
let teste = 1;

Cypress.Commands.add('AlertError_HaveText', (expect) =>
{
	cy.contains('.alert-error', expect)
		.should('be.visible')
});

Cypress.Commands.add('preencheDadosCartao', (card) => {
	cy.get('[data-cy="number"]')
		.type(card.number)
	cy.get('[data-cy="holderName"]')
		.type(card.holderName)
	cy.get('[data-cy="expirationDate"]')
		.type(card.expirationDate)
	cy.get('[data-cy="cvv"]')
		.type(card.cvv)
	cy.get(`[data-cy="bank-${card.bank}"]`)
		.click()
})

Cypress.Commands.add('enviaDadosCartao', () => {
	cy.get('[data-cy="saveMyCard"]')
		.click()
})

context(`${contexto} - Teste de Componentes.`, () =>
{
	let complemento = 1;
	describe(`${cenario} - Adicionando Cartão Preenchimento inválido..`, () =>
	{
		const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '12/40',
				cvv: '109',
				bank: 'nubank'
		}

		beforeEach(() => {
			cy.mount(<AddCard />)
		});

		it(`${teste}.${complemento} - Campos obrigatório preenchidos - Nenhum.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.alert-error')
				.eq(0)
				.should('be.visible')
				.and('have.text', 'Número do cartão é obrigatório');

			cy.get('.alert-error')
				.eq(1)
				.should('be.visible')
				.and('have.text', 'Nome do titular é obrigatório')

			cy.get('.alert-error')
				.eq(2)
				.should('be.visible')
				.and('have.text', 'Data de expiração é obrigatória')


			cy.get('.alert-error')
				.eq(3)
				.should('be.visible')
				.and('have.text', 'CVV é obrigatório')


			cy.get('.alert-error')
				.eq(4)
				.should('be.visible')
				.and('have.text', 'Selecione um banco')
		});

		//Melhoria do código  após criação de looping.
		it(`${teste}.${complemento} - Exemplo - Utilizando array de informações.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			const alerts = [
				'Número do cartão é obrigatório',
				'Nome do titular é obrigatório',
				'Data de expiração é obrigatória',
				'CVV é obrigatório',
				'Selecione um banco'
			]

			alerts.forEach((alert) => {
				cy.AlertError_HaveText(alert)
			})
		});

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número do cartão.`, () =>
		{
			
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242')

			cy.get('.alert-error')
				.contains('Número do cartão é obrigatório')
				.should('not.be.exist');

			cy.get('.alert-error')
				.eq(0)
				.should('be.visible')
				.and('have.text', 'Nome do titular é obrigatório')

			cy.get('.alert-error')
				.eq(1)
				.should('be.visible')
				.and('have.text', 'Data de expiração é obrigatória')


			cy.get('.alert-error')
				.eq(2)
				.should('be.visible')
				.and('have.text', 'CVV é obrigatório')


			cy.get('.alert-error')
				.eq(3)
				.should('be.visible')
				.and('have.text', 'Selecione um banco')
		});

		//Melhoria do código  após criação do comando customizado.

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número do cartão.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242');

			cy.AlertError_HaveText('Nome do titular é obrigatório');
			cy.AlertError_HaveText('Data de expiração é obrigatória');
			cy.AlertError_HaveText('CVV é obrigatório');
			cy.AlertError_HaveText('Selecione um banco');
		});

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome do cartão.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242');

			cy.get('.bg-zinc-800')
				.eq(1)
				.type('Bruno Siqueira');

			cy.AlertError_HaveText('Data de expiração é obrigatória');
			cy.AlertError_HaveText('CVV é obrigatório');
			cy.AlertError_HaveText('Selecione um banco');
		});

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome + Data de Expiração do cartão.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242');

			cy.get('.bg-zinc-800')
				.eq(1)
				.type('Bruno Siqueira');

			cy.get('.bg-zinc-800')
				.eq(2)
				.type('01/49');

			cy.AlertError_HaveText('CVV é obrigatório');
			cy.AlertError_HaveText('Selecione um banco');
		});

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome + Data de Expiração + CVV do cartão.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242');

			cy.get('.bg-zinc-800')
				.eq(1)
				.type('Bruno Siqueira');

			cy.get('.bg-zinc-800')
				.eq(2)
				.type('01/49');

			cy.get('.bg-zinc-800')
				.eq(3)
				.type('789');

			cy.AlertError_HaveText('Selecione um banco');
		});

		/*it.skip(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome + Data de Expiração + CVV + Banco do cartão.`, () =>
		{
			cy.contains('button', 'Adicionar').click();

			cy.get('.bg-zinc-800')
				.eq(0)
				.type('4242424242424242');

			cy.get('.bg-zinc-800')
				.eq(1)
				.type('Bruno Siqueira');

			cy.get('.bg-zinc-800')
				.eq(2)
				.type('01/49');

			cy.get('.bg-zinc-800')
				.eq(3)
				.type('789');

			cy.get('.transition-all')
				.eq(0)
				.click();

			cy.contains('button', 'Adicionar').click();

			cy.get('.alertSucess')
				.should('be.visible')
		});*/

		it(`${teste}.${++complemento} - Cadastro realizado com sucesso.`, () =>
		{
			const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '12/40',
				cvv: '109',
				bank: 'nubank'
			}

			/*
			cy.contains('label', 'Número do Cartão')
				.parent()
				.find('input')
				.type(myCard.number)
			*/

			cy.get('[data-cy="number"]')
				.type(myCard.number)
			cy.get('[data-cy="holderName"]')
				.type(myCard.holderName)
			cy.get('[data-cy="expirationDate"]')
				.type(myCard.expirationDate)
			cy.get('[data-cy="cvv"]')
				.type(myCard.cvv)
			cy.get(`[data-cy="bank-${myCard.bank}"]`)
				.click()
			/*
				Ou

			cy.contains('button', 'Nubank')
				.click()
			*/

			cy.intercept('POST', 'http://wallet.cardfify.dev/api/cards', (req)=> { req.reply({
					statusCode: 201,
					body: myCard
				})
			}).as('addCard')

			cy.get('[data-cy="saveMyCard"]')
				.click()

			cy.wait('@addCard')

			cy.get('.sucessMessage')
				.should('be.visible')
				.and('contain', 'Cartão cadastrado')
				.and('have.text', 'Cartão cadastrado com sucesso!')
		});

		it(`${teste}.${++complemento} - Validar nome do titular com menos de 2 caracteres.`, () =>
		{
			cy.preencheDadosCartao({...myCard, holderName: 'B'})

			cy.enviaDadosCartao()

			cy.get('[data-cy="AlertHolderName"]')
				.should('be.visible')
				.and('have.text', 'Nome deve ter pelo menos 2 caracteres')
		});

		it(`${teste}.${++complemento} - Validar data de expiração invalida.`, () =>
		{
			const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '13/40',
				cvv: '109',
				bank: 'nubank'
			}

			cy.get('[data-cy="number"]')
				.type(myCard.number)
			cy.get('[data-cy="holderName"]')
				.type(myCard.holderName)
			cy.get('[data-cy="expirationDate"]')
				.type(myCard.expirationDate)
			cy.get('[data-cy="cvv"]')
				.type(myCard.cvv)
			cy.get(`[data-cy="bank-${myCard.bank}"]`)
				.click()

			cy.get('[data-cy="saveMyCard"]')
				.click()

			cy.AlertError_HaveText('Data de expiração inválida ou vencida')
				.and('have.text', 'Data de expiração inválida ou vencida')
		});

		it(`${teste}.${++complemento} - Validar cvv com menos de 1 digítos - Digita 1.`, () =>
		{
			const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '12/40',
				cvv: '1',
				bank: 'nubank'
			}

			cy.get('[data-cy="number"]')
				.type(myCard.number)
			cy.get('[data-cy="holderName"]')
				.type(myCard.holderName)
			cy.get('[data-cy="expirationDate"]')
				.type(myCard.expirationDate)
			cy.get('[data-cy="cvv"]')
				.type(myCard.cvv)
			cy.get(`[data-cy="bank-${myCard.bank}"]`)
				.click()

			cy.get('[data-cy="saveMyCard"]')
				.click()

			cy.AlertError_HaveText('CVV deve ter 3 ou 4 dígitos')
				.and('have.text', 'CVV deve ter 3 ou 4 dígitos')
		});

		it(`${teste}.${++complemento} - Validar cvv com menos de 3 digítos - Digita 2.`, () =>
		{
			cy.preencheDadosCartao({...myCard, cvv: '12'})

			cy.get('[data-cy="saveMyCard"]')
				.click()

			cy.AlertError_HaveText('CVV deve ter 3 ou 4 dígitos')
				.and('have.text', 'CVV deve ter 3 ou 4 dígitos')
		});

		it(`${teste}.${++complemento} - Validar cvv com menos de 3 digítos - Digita letra.`, () =>
		{
			const myCard = {
				number: '5167 5482 2213 9921',
				holderName: 'Bruno Siqueira',
				expirationDate: '12/40',
				cvv: 'ab',
				bank: 'nubank'
			}

			cy.preencheDadosCartao(myCard)

			cy.enviaDadosCartao()

			cy.AlertError_HaveText('CVV é obrigatório')
				.and('have.text', 'CVV é obrigatório')
		});
	});
});