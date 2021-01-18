/* global Given, Then, When */
import EditRelatorio from '../../pageobjects/EditRelatorio'
const editRelatorio = new EditRelatorio

When('inserir informações na seção {string}', (Nome) =>{
    editRelatorio.inserirInfor(Nome)
})
And('confirmar alteração realizada', ()=> {
    cy.get('#btnSave')
    .click({force: true})
})
            
Then('é exibido confirmação de alteração realizada', () => {
    cy.get('.message').should('exist')
    
})
And('é exibido relatórios com nomes iguais', ()=> {
    editRelatorio.nomesIguais()
})


