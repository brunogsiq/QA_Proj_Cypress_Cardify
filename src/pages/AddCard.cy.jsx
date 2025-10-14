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

context(`${contexto} - Teste de Componentes.`, () =>
{
	let complemento = 1;
	describe(`${cenario} - Adicionando Cartão Preenchimento inválido..`, () =>
	{
		it(`${teste}.${complemento} - Campos obrigatório preenchidos - Nenhum.`, () =>
		{
			
			cy.mount(<AddCard />)

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

		it(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número do cartão.`, () =>
		{
			
			cy.mount(<AddCard />)

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
			cy.mount(<AddCard />)

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
			cy.mount(<AddCard />)

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
			cy.mount(<AddCard />)

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
			cy.mount(<AddCard />)

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

		it.only(`${teste}.${++complemento} - Campos obrigatório preenchidos - Número + Nome + Data de Expiração + CVV + Banco do cartão.`, () =>
		{
			cy.mount(<AddCard />)

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
		});

		//Melhoria do código  após criação de looping.
		it(`${teste}.${++complemento} - Exemplo - Não considerar.`, () =>
		{
			cy.mount(<AddCard />)

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
	});
});