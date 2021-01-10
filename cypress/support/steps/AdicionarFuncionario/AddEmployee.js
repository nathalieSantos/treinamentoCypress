import AddEmployeePage from '../../pageobjects/AddEmployeePage'
const addEmpPage = new AddEmployeePage
let funcionarios = []
before(()=>{
    cy.fixture('addFuncionario').then( info=>{
        funcionarios=info
    })
})
When('é preenchido o nome do funcionário', dt => {
    const a = "sem id"
    console.log(funcionarios[a])
    dt.hashes().forEach(item =>{
        addEmpPage.setFirstName(item.first_name)
        addEmpPage.setMiddleName(item.middle_name)
        addEmpPage.setLastName(item.last_name)
    })
})

And('persistir as informações', () => {
	//addEmpPage.saveEmployee()
})

Then('o funcionário é adicionado ao sistema', () => {
	cy.url().should('contain', 'viewPersonalDetails')
})

