import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro por {string}', (employeeName) => {
	searchEmpListPage.setEmployeeName(employeeName)
})

When('tentar buscar os funcionários', () => {
    searchEmpListPage.searchEmployee()
})

Then('os funcionários com o {string} são filtrados', (nome) => {
	searchEmpListPage.resultTable(nome)
})
