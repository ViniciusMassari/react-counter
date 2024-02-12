describe('form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('create new cycle test', () => {
    cy.getDataTest('startCountdown').as('startButton');

    cy.get('@startButton').should('be.disabled');
    cy.getDataTest('createCycle').should('exist').as('createCycleForm');
    cy.getDataTest('taskName').type('Criar Projeto');
    cy.getDataTest('minutesAmount').type(5);
    cy.get('@startButton').should('not.be.disabled');
    cy.get('@startButton').click();
    cy.getDataTest('taskName').should('be.disabled');

    cy.getDataTest('stopCountdown').should('exist');
    cy.getDataTest('stopCountdown').click();

    cy.visit('/history');
    cy.contains(/Meu histórico/gi);
    cy.contains(/criar projeto/gi);
  });
});
