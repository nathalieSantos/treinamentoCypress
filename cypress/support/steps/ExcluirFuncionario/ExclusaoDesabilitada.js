And('não selecionar nenhum funcionário', () => {
    cy.get('input[type="checkbox"]')
    .should('not.be.checked')
})

When('tentar excluir um funcionário', () => {

})

Then('a exclusão não é permitida', () => {
	cy.get('#btnDelete')
    .should('have.attr','disabled')
})