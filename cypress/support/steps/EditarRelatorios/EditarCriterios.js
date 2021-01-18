/* global Given, Then, When */
import EditRelatorio from '../../pageobjects/EditRelatorio'
const editRelatorio = new EditRelatorio

When('adicionar {string}', (critérios) =>{
    editRelatorio.selectCriterio(critérios)

})
And('selecionar {string}', (Idioma)=> {
    editRelatorio.selectLanguage(Idioma)
})
And('confirmar alteração realizada', ()=> {
    cy.get('#btnSave')
    .click()
})

Then('é exibido confirmação de alteração realizada', () => {
    cy.get('.message').should('exist')
    
})

