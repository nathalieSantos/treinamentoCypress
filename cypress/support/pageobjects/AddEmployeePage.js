import AddEmployeeElements from '../elements/AddEmployeeElements'
const addEmpElements = new AddEmployeeElements

class AddEmployeePage {

    systemAccess() {
        cy.visit('/pim/addEmployee')
    }
    getFirstName(){
        return cy.get(addEmpElements.firstNameField())
            .invoke('val')
    }
    setFirstName(firstName) {
        cy.typeChecaVazio(addEmpElements.firstNameField(), firstName)
    }
    getMiddleName(){
        return cy.get(addEmpElements.middleNameField())
            .invoke('val')
    }
    setMiddleName(middleName) {
        cy.typeChecaVazio(addEmpElements.middleNameField(), middleName)
    }
    getLastName(){
        return cy.get(addEmpElements.lastNameField())
            .invoke('val')
    }
    setLastName(lastName) {
        cy.typeChecaVazio(addEmpElements.lastNameField(), lastName)
    }
    getId(){
        return cy.get(addEmpElements.idField())
            .invoke('val')
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
    getUsername(){
        return cy.get(addEmpElements.usernameField())
            .invoke('val')
    }
    setUsername(username){
        cy.typeChecaVazio(addEmpElements.usernameField(), username)
    }
    getPassword(){
        return cy.get(addEmpElements.passwordField())
            .invoke('val')
    }
    setPassword(password){
        cy.typeChecaVazio(addEmpElements.passwordField(), password)
    }
    getRePassword(){
        return cy.get(addEmpElements.repasswordField())
            .invoke('val')
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