/*global Given, Then, When */   

And('preencher as informações', (dataTable) =>{
    console.log(dataTable.hashes())
    dataTable.hashes().forEach(elem => {
        cy.get('#report_report_name').type(elem.nome)
        cy.get('#report_criteria_list').select(elem.seleçãoGrupo)
    })
})

And('adiciono o grupo de campos a ser exibido', () =>{
    cy.get('#btnAddDisplayGroup').click()
})

When('confirmar envio do relatório', () =>{
    cy.get('#btnSave').click()
})

Then('o relatório foi criado', () =>{
    cy.get('.message').should('exist')
})