import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro usando {string}', (tipoContrato) => {
    searchEmpListPage.setEmploymentStatus(tipoContrato)
});

Then('os funcionários dos contratos de tipo {string} são filtrados', (tipoContrato) => {
	searchEmpListPage.resultTable(tipoContrato)
});
