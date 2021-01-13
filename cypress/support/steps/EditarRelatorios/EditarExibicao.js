/* global Given, Then, When */
import EditRelatorio from '../../pageobjects/EditRelatorio'
const editRelatorio = new EditRelatorio

When('editar seção de grupos de {string}', (Exibição) =>{
    editRelatorio.selectExibicao(Exibição)

})
And('editar {string}', (CamposDeExibição)=> {
    editRelatorio.selectCamposExib(CamposDeExibição)
})
And('confirmar alteração realizada', ()=> {
    cy.get('#btnSave')
    .click()
})
            
Then('é exibido confirmação de mudança', () => {
    cy.get('.message').should('exist')
    
})
