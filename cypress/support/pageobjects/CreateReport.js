import createReport from '../elements/createReport'
const report = new createReport

class criarRelatorio {

    nomeRelatorio(nome){
        cy.get(report.name())
            .type(nome)
    }

    grupoExibicao(grupo){
        cy.get(report.displayGroup())
            .select(grupo)
    }

    addGrupoExibicao(){
        cy.get(report.addDisplayG())
            .click()
    }

    inputRequerido(){
        cy.get(report.request())
            .should('exist')
    }

    selecionarCriterio(criterio){
        cy.get(report.criteria())
            .select(criterio)
    }

    addCriterio(){
        cy.get(report.addCriteria())
            .click()
    }

    removerCriterio(){
        cy.get(report.close())
            .click({force: true})
    }

    enviarRelatorio(){
        cy.get(report.save())
            .click()
    }

    confirmarCriacao(){
        cy.get(report.validation())
            .should('contain', 'Successfully Saved')
    }

    confirmarTable(nome){
        cy.get(report.table())
        .should('contain', nome)
    }

    validacao(resultado){
        const resultados = {"é criado":"exist", "não é criado":"not.exist"}
        cy.get(report.validation()).should(resultados[resultado])    
    }
}

export default criarRelatorio