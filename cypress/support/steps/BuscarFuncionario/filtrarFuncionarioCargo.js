import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro usando o {string}', (cargo) => {
	searchEmpListPage.setJobTitle(cargo)
});

Then('os funcionários de cargo {string} são filtrados', (cargo) => {
	searchEmpListPage.resultTable(cargo)
});
