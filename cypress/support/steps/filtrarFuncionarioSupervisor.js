import SearchEmpListPage from '../pageobjects/SearchEmpListPage'

const searchEmpListPage = new SearchEmpListPage

And('preencho o filtro supervisor usando {string}', (supervisor) => {
    searchEmpListPage.setSupervisorName(supervisor)
})

Then('os funcionários supervisionados por {string} são filtrados', (supervisor) => {
    cy.get('#resultTable').should('contain', supervisor)
});
