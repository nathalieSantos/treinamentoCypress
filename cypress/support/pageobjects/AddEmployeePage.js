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
        cy.typeChecaVazio(addEmpElements.idField(), id)
    }
    saveEmployee() {
        cy.get(addEmpElements.saveBtn())
        .click()
    }
}

export default AddEmployeePage