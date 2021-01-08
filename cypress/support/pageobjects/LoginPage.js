import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {

    systemAccess() {
        cy.visit('/auth/login')
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
    accessOk(){
        cy.url()
        .should('be.equal',`${Cypress.config("baseUrl")}dashboard`)
    }
}

export default LoginPage