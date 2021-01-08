/*global Given, Then, When */ 

And('não se forneça nenhuma informação', () =>{
    cy.get('#report_report_name').should('contain', '')
    //display_fieldset
    cy.get('display_groups').should('not.exist')
})

And('confirmar envio do relatório', () =>{
    cy.get('#btnSave').click()
})

And('são indicados os inputs requeridos', () =>{
    cy.get('span[class="validation-error"]').should('exist')
})