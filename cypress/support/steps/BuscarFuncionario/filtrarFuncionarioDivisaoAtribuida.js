import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

When('preencho o filtro usando a {string}', (divisao) => {
	searchEmpListPage.setSubUnit(divisao)
})

Then('os funcionários da divisão {string} são filtrados', (divisao) => {
    searchEmpListPage.resultTable(divisao)
})
