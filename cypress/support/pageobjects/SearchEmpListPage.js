import SearchEmployeeElements from '../elements/SearchEmployeeElements'

const searchEmployeeElements = new SearchEmployeeElements

class SearchEmpListPage {

    setEmployeeName(employeeName){
        cy.wait(500)
        cy.typeChecaVazio(searchEmployeeElements.employeeNameField(), employeeName)
    }

    setSupervisorName(supervisorName){
        cy.wait(500)
        cy.get(searchEmployeeElements.supervisorNameField()).type(supervisorName)
    }

    setID(ID){
        cy.wait(500)
        cy.get(searchEmployeeElements.employeeIDField()).type(ID)
    }

    setJobTitle(jobTitle){
        cy.wait(500)
        cy.get(searchEmployeeElements.jobTitleField()).select(jobTitle)
    }

    setEmploymentStatus(employmentStatus){
        cy.wait(500)
        cy.get(searchEmployeeElements.employmentStatusField()).select(employmentStatus)
    }

    setSubUnit(subUnit){
        cy.wait(500)
        cy.get(searchEmployeeElements.subUnitField()).select(subUnit)
    }

    setInclude(include){
        cy.wait(500)
        cy.get(searchEmployeeElements.includeField()).select(include)
    }

    searchEmployee(){
        cy.get(searchEmployeeElements.searchField()).click()
    }

    resultTable(string){
        cy.get(searchEmployeeElements.resultTable()).should('contain', string)
    }

    searchTable(string){
        cy.get(searchEmployeeElements.searchTable()).should('contain', string)
    }
   

}

export default SearchEmpListPage