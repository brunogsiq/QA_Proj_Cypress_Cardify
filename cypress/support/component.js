// Import commands.js using ES2015 syntax:
import './commands';

//Importando o CSS global para os testes de componentes
import "../../src/index.css";

import { mount } from 'cypress/react';

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)