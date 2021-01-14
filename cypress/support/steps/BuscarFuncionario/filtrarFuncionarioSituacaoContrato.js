import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro incluindo a {string}', (situacaoContrato) => {
	searchEmpListPage.setInclude(situacaoContrato)
})

Then('os funcionários com a situação {string} são filtrados', (situacaoContrato) => {
	searchEmpListPage.searchTable(situacaoContrato)
})
