import AddEmployeePage from '../../pageobjects/AddEmployeePage'
const addEmpPage = new AddEmployeePage
let funcionarios = []
before(()=>{
    cy.fixture('addFuncionario').then( info=>{
        funcionarios=info
    })
})
When('é preenchido o nome do funcionário {string}', (teste, dt) => {
    cy.wait(1000)
    .log(addEmpPage.getId())
    cy.fixture('addFuncionario').then(dados =>{
        addEmpPage.setFirstName(dados[teste].firstName)
        addEmpPage.setMiddleName(dados[teste].middleName)
        addEmpPage.setLastName(dados[teste].lastName)
    })
})

And('persistir as informações', () => {
	//addEmpPage.saveEmployee()
})

Then('o funcionário é adicionado ao sistema', () => {
	cy.url().should('contain', 'viewPersonalDetails')
})

