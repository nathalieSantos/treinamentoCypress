import EmpList from '../../pageobjects/EmpList'
const empList = new EmpList

And('selecionar todos os funcionários', () => {
    empList.selectAll()
})

When('tentar excluir estes funcionários', () => {
	empList.deleteBtn()
})

Then('o funcionário foi excluído', () => {
    empList.checkRow()
})