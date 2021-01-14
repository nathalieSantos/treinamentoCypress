import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro usando o {string} do funcionário', (ID) => {
	searchEmpListPage.setID(ID)
});


When('tentar buscar o funcionário', () => {
	searchEmpListPage.searchEmployee()
});


Then('o funcionário do {string} é filtrado', (ID) => {
	searchEmpListPage.resultTable(ID)
})