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
    inserirInfor(Nome){
        cy.get('#report_report_name')
        .clear()
        .type(Nome)
        cy.get('#btnSave')
        .click({force: true})
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/core/definePredefinedReport?reportId=7')
        cy.get('#report_report_name')
        .clear()
        .type(Nome)
    }
    nomesIguais(){
        cy.get('tbody > tr.even').contains('Relatório de presença')
        .should('be.visible')
        cy.get('tbody > tr.odd').contains('Relatório de presença')
        .should('be.visible')
    }  
}    
export default EditRelatorio