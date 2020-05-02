describe('Initial loading', () => {
    beforeEach(()=>{
        window.window.cy.visit('/')
    })

    it('should test main button', ()=>{
        window.cy.get('.pageButtons')
        .click();
    })
})

describe('Test general page', () =>{
    it('should load', () =>{
        window.cy.visit('/animals')
    })

    it('should test card btn', ()=>{
        window.cy.get('.border-0')
        .click()
    })
})

describe('test-gallery', () => {
    it('should have'), () =>{
        window.cy.get('#container-fluid');
    }
})
