import SearchEmpListPage from '../../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

But('deixo o filtro em branco', () => {
	return true;
});

When('tentar buscar os funcionários', () => {
	searchEmpListPage.searchEmployee();
});

Then('a lista de funcionários continua a mesma', () => {
	return true;
})
