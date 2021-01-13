/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport 

And('não se forneça nenhuma informação', () =>{
    cy.get('#report_report_name').should('contain', '')
    cy.get('display_groups').should('not.exist')
})

And('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})

And('são indicados as seções obrigatorias', () =>{
    relatorio.inputRequerido()
})