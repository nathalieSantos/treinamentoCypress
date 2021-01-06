import PIMElements from '../elements/PIMElements'
const pimElements = new PIMElements

class PIMPage {

    goToPIM() {
        cy.get(pimElements.PIMTab())
        .click()
    }
}

export default PIMPage