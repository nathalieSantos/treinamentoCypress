import AddEmployeeElements from '../elements/AddEmployeeElements'
const addEmpElements = new AddEmployeeElements

class AddEmployeePage {

    systemAccess() {
        cy.visit('/pim/addEmployee')
    }
    setFirstName(firstName) {
        cy.typeChecaVazio(addEmpElements.firstNameField(), firstName)
    }
    setMiddleName(middleName) {
        cy.typeChecaVazio(addEmpElements.middleNameField(), middleName)
    }
    setLastName(lastName) {
        cy.typeChecaVazio(addEmpElements.lastNameField(), lastName)
    }
    setId(id) {
        cy.get(addEmpElements.idField())
            .clear()
        cy.typeChecaVazio(addEmpElements.idField(), id)
    }
    checkLoginDetail(){
        cy.get(addEmpElements.loginDetailsChk())
            .click()
    }
    setUsername(username){
        cy.typeChecaVazio(addEmpElements.usernameField(), username)
    }
    setPassword(password){
        cy.typeChecaVazio(addEmpElements.passwordField(), password)
    }
    setRePassword(password){
        cy.typeChecaVazio(addEmpElements.repasswordField(), password)
    }
    setStatus(status){
        cy.get(addEmpElements.statusSelect())
            .select(status)
    }
    getPhotoInput(){
        return cy.get(addEmpElements.selectPhotoFile())
    }
    saveEmployee() {
        cy.get(addEmpElements.saveBtn())
        .click()
    }
}

export default AddEmployeePage