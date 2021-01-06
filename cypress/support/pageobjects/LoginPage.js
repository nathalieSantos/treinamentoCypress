import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {

    systemAccess() {
        cy.visit(url)
    }
    setUser(user) {
        cy.get(loginElements.userField())
        .type(user)
    }
    setPass(pass) {
        cy.get(loginElements.passField())
        .type(pass)
    }
    makeLogin() {
        cy.get(loginElements.submitBtn())
        .click()
    }
}

export default LoginPage