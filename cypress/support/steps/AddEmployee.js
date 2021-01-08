import AddEmployeePage from '../pageobjects/AddEmployeePage'
const addEmpPage = new AddEmployeePage

When('é preenchido o nome do funcionário', dt => {
    console.log(dt)
    dt.hashes().forEach(item =>{
        addEmpPage.setFirstName(item.first_name)
        addEmpPage.setMiddleName(item.middle_name)
        addEmpPage.setLastName(item.last_name)
    })
})

And('persistir as informações', () => {
	addEmpPage.saveEmployee()
})

Then('o funcionário é adicionado ao sistema', () => {
	
})

