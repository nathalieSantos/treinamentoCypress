/* global Given, Then, When */

When('inserir informações na seção {string}', (Nome) =>{
    cy.get('#report_report_name')
    .clear()
    .type(Nome)
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/core/definePredefinedReport?reportId=5')
    cy.get('#report_report_name')
    .clear()
    .type(Nome)
})
And('confirmar alteração realizada', ()=> {
    cy.get('#btnSave')
    .click()
})
            
Then('é exibido confirmação de alteração realizada', () => {
    cy.get('.message').should('exist')
    
})
And('é exibido relatórios com nomes iguais', ()=> {
    cy.contains('Relatório de presença')
    .should('be.visible')
})

