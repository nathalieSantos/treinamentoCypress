/* global Given, Then, When */

When('adicionar seção de grupos de exibição', (dataTable) =>{
    dataTable.hashes().forEach(info => {
    cy.get('#report_display_groups')
    .select(info.DOGroups)
    cy.get('#btnAddDisplayGroup')
    .click()
    })
})
And('tento adicionar a mesma seção de grupos de exibição', () =>{
    cy.get('#report_display_groups').should('not.contain', 'Dependents')
})
            
Then('é exibido apenas uma seção', () => {
    cy.contains('Dependents')
    .should('be.visible')
    
})