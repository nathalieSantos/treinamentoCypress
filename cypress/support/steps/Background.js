import LoginPage from '../pageobjects/LoginPage'
import PIMPage from '../pageobjects/PIMPage'
const loginPage = new LoginPage
const pimPage = new PIMPage

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

And('acesso à seção {string}', (secao) => {
    cy.fixture('secoes.json')
    .then(secoes => {
        cy.visit(secoes[secao])
    })
})
