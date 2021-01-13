/* global Given, Then, When */

When('inserir números na seção {string}', (nome) =>{
    cy.get('#report_report_name')
    .clear()
    .type(nome)

})
And('confirmar alteração realizada', ()=> {
    cy.get('#btnSave')
    .click()
})
            
Then('é exibido números no nome', () => {
    cy.get('.message').should('exist')
    
})