import LoginPage from '../pageobjects/LoginPage'
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

And('confirmado o acesso ao sistema', () => {
	loginPage.accessOk()
})

And('acesso à seção {string}', (secao) => {
    cy.fixture('secoes.json')
    .then(secoes => {
        cy.visit(secoes[secao])
    })
})