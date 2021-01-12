import EmpList from '../../pageobjects/EmpList'
const empList = new EmpList
 
And('selecionar um funcionário', () => {
    empList.selectEmp()
    empList.getEmpID()
})

When('tentar excluir este funcionário', () => {
    empList.deleteBtn()
})

And('confirmar a operação de exclusão', () => {
    empList.deleteOk()
})

And('a operação for bem sucedida', () => {
    empList.deleteLog()
})

Then('o funcionário foi excluído', () => {
    empList.deleteComplete()
})