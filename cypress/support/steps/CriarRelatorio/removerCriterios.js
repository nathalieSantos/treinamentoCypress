/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport

And('preencho as informações {string}, {string}', (nome, grupo) =>{
    relatorio.nomeRelatorio(nome)
    relatorio.grupoExibicao(grupo)
})

And('adiciono o grupo de campos a ser exibido', () =>{
    relatorio.addGrupoExibicao()
})

And('adiciono um critério {string}', ( criterio) =>{
    relatorio.selecionarCriterio(criterio)
    relatorio.addCriterio() 
})

When('removo o critério que foi adicionado', () =>{
    relatorio.removerCriterio() 
    cy.get('#li_service_period').should('not.visible')
})

And('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})

Then('o relatório {string} foi criado', (nome) =>{
    relatorio.confirmarCriacao()
    relatorio.confirmarTable(nome)
})