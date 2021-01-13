/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport

And('preencho informações {string}, {string}', (nome, grupo) =>{
    relatorio.nomeRelatorio(nome)
    relatorio.grupoExibicao(grupo)
})

And('adiciono o grupo de campos a ser exibido', () =>{
    relatorio.addGrupoExibicao()
})

When('excluo o campo {string}, {string} da exibição', (camp1, camp2) =>{
    cy.get('#display_groups > li:nth-child(3) > ul > li:nth-child(6) > a').click()
    cy.get('#report_display_field_25').should('not.exist', camp1)
    cy.get('#display_groups > li:nth-child(3) > ul > li:nth-child(2) > a').click()
    cy.get('#report_display_field_21').should('not.exist', camp2)
})

And('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})

Then('o relatório {string} foi criado', (nome) =>{
    relatorio.confirmarCriacao()
    relatorio.confirmarTable(nome)
})
