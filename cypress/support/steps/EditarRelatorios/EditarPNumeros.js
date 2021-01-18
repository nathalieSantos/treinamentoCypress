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

Then('é exibido confirmação de mudança', () => {
    cy.get('.message').should('exist')
})
And('é exibido números no nome', () => {
    cy.get('tbody > tr.odd').contains('12356')
    .should('be.visible')
})

