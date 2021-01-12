
class EmpList {

    selectEmp() {
        cy.get('tbody > tr:nth-child(1) > td:nth-child(1)')
        .children()
        .click()
    }

    selectAll(){
        cy.get('#ohrmList_chkSelectAll')
        .click()
    }

    checkRow(){
        cy.get('input[name="chkSelectRow[]"]')
        .should('not.exist')
    }

    getEmpID(){
        cy.get('tbody > tr:nth-child(1) > td:nth-child(1)')
        .next()
        .children()
        .invoke('text')
        .as('id')
    }

    deleteBtn(){
        cy.get('#btnDelete')
        .should('not.have.attr','disabled')
        .then(() => {
            cy.get('#btnDelete').click()
        })
    }

    deleteOk(){
        cy.get('.modal-body')
        .should('contain','Delete records?')
        .then(() => {
            cy.get('#dialogDeleteBtn')
            .click()
        })
    }

    deleteLog(){
        cy.get('div[class="message success fadable"]')
        .should('contain','Successfully Deleted')
        .should('be.visible')
    }

    deleteComplete(){
        cy.get('@id')
        .then(res => {
            cy.get('tr')
            .contains(res)
            .should('not.exist')
        })
    }
}

export default EmpList