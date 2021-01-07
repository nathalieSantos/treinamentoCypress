import LoginPage from '../pageobjects/LoginPage'
const secoes = {'Lista de Funcionários': '/pim/viewEmployeeList'}
const loginPage = new LoginPage

Given('o acesso ao sistema', () => {
	loginPage.systemAccess()
})

And('informadas as credenciais', () => {
    cy.fixture('login.json')
    .then(fix => {
        loginPage.setUser(fix.username)
        loginPage.setPass(fix.password)
        loginPage.makeLogin()
    })
})

And('acesso a seção {string}', (secao) => {
	cy.visit(secoes[secao])
})
