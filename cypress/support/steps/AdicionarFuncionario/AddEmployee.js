import AddEmployeePage from '../../pageobjects/AddEmployeePage'
const addEmpPage = new AddEmployeePage
let funcionarios = []
before(()=>{
    cy.fixture('addFuncionario').then( info=>{
        funcionarios=info
    })
})
When('é preenchido o nome do funcionário {string}', (teste) => {
    addEmpPage.setFirstName(funcionarios[teste].firstName)
    addEmpPage.setMiddleName(funcionarios[teste].middleName)
    addEmpPage.setLastName(funcionarios[teste].lastName)
    addEmpPage.setId(funcionarios[teste].employeeId)
})

And('é preenchido os detalhes de login do funcionário {string}', (teste) =>{
    addEmpPage.setUsername(funcionarios[teste].user_name)
    addEmpPage.setPassword(funcionarios[teste].user_password)
    addEmpPage.setRePassword(funcionarios[teste].re_password)
})

And('é adicionado uma imagem', () =>{
    addEmpPage.getPhotoInput().attachFile('perfilteste.jpg')
})

When('marco a opção de criar detalhes de login', () =>{
    addEmpPage.checkLoginDetail()
})

And('persistir as informações', () => {
	addEmpPage.saveEmployee()
})

Then('o funcionário é adicionado ao sistema', () => {
	cy.url().should('contain', 'viewPersonalDetails')
})

Then('o funcionário não é adicionado ao sistema', () => {
    cy.url().should('contain', 'addEmployee')
})

And('é informado erro {string}', (teste) =>{
    cy.get(`span[for="${funcionarios[teste].erro}"]`)
        .invoke('text')
        .should('eq', funcionarios[teste].msgErro)
})

And('é informado usuário já existente', () =>{
    cy.get('div[class="message warning fadable"]')
        .invoke('text')
        .should('contain', 'Employee Id Exists')
})

