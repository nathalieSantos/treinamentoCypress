/*global Given, Then, When */  

And('preencher informações', (dataTable) =>{
    console.log(dataTable.hashes())
    dataTable.hashes().forEach(elem => {
        cy.get('#report_report_name').type(elem.nome)
        cy.get('#report_criteria_list').select(elem.seleçãoGrupo)
    })
})

And('adiciono o grupo de campos a ser exibido', () =>{
    cy.get('#btnAddDisplayGroup').click()
})

When('adiciono o tipo de critério {string}', (criterio) =>{  
    cy.get('#report_criteria_list criterio').select(criterio)
    cy.get('#btnAddConstraint add').click() 
})

And('selecio o valor do criterio {string}', (valor) =>{
    if(valor == ''){
        return
    }
    cy.get('#report_language').select(valor)
})

And('confirmar envio do relatório', () =>{
    cy.get('#btnSave').click()
})
Then('o relatório {string}', (resultado) =>{
    const resultados = {"é criado":"exist", "não é criado":"not.exist"}
    if(resultado == 'é criado'){
        cy.get('.message').should(resultados[resultado])
        return
    }
    cy.get('span[class="validation-error"]').should(resultados[resultado])
})