/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport

And('preencha as informações {string}, {string}', (nome, grupo) =>{
    relatorio.nomeRelatorio(nome)
    relatorio.grupoExibicao(grupo)
})

And('adiciono o grupo de campos a ser exibido', () =>{
    relatorio.addGrupoExibicao()
})

When('verifico quantidade de caracteres inseridos no nome', () => {
    cy.get('#report_report_name').invoke('val').then(elem => {
        const tam = elem.length
        expect(elem).to.have.length(tam)
    })

})

And('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})

Then('o relatório {string} foi criado', (nome) =>{
    relatorio.confirmarCriacao()
    relatorio.confirmarTable(nome)
})
