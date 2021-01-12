class EditRelatorio  {

    selectCriterio(Crit){
        cy.get('#report_criteria_list').select(Crit)
        cy.get('#btnAddConstraint')
        .click()
    }

    selectLanguage(Langa){
        cy.get('#report_language').select(Langa)
    }

    selectExibicao(Exib){
        cy.get('#report_display_groups').select(Exib)

    }

    selectCamposExib(Ex){
        cy.get('#report_display_field_list').select(Ex)
        cy.get('#btnAddDisplayField')
        .click()
    }    
}    
export default EditRelatorio