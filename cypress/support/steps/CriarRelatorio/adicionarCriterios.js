/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport   

And('preencher informações {string}, {string}', (nome, grupo) =>{
    relatorio.nomeRelatorio(nome)
    relatorio.grupoExibicao(grupo)
})

And('adiciono o grupo de campos a ser exibido', () =>{
    relatorio.addGrupoExibicao()
})

When('adiciono o tipo de critério {string}', (criterio) =>{ 
    relatorio.selecionarCriterio(criterio)
    relatorio.addCriterio(criterio)
})

And('selecio o valor do criterio {string}', (valor) =>{
    if(valor == ''){
        return
    }
    cy.get('#report_language').select(valor)
})

And('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})
Then('o relatório {string}', (resultado) =>{
    if(resultado == 'é criado'){
        relatorio.validacao(resultado)
        return
    }
    relatorio.validacao(resultado)
})