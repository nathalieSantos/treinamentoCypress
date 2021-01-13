/*global Given, Then, When */   
import CreateReport from '../../pageobjects/CreateReport'
const relatorio = new CreateReport  

And('preencher as informações {string}, {string}', (nome, grupo) =>{
    relatorio.nomeRelatorio(nome)
    relatorio.grupoExibicao(grupo)
})

And('adiciono o grupo de campos a ser exibido', () =>{
    relatorio.addGrupoExibicao()
})

When('confirmar envio do relatório', () =>{
    relatorio.enviarRelatorio()
})

Then('o relatório {string} foi criado', (nome) =>{
    relatorio.confirmarCriacao()
    relatorio.confirmarTable(nome)
})