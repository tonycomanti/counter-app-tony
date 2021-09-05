describe('CounterApp', function() {
    beforeEach(function() {
        cy.visit("/")
    })
    
    it('Verify Page Title', function() {
    
        cy.title().should('eq','Counter App')
    
    })
    
    it('Verify Functionality Of Plus Button', function() {
    
        cy.get('[data-cy="counter"]').then(($elem) => {
        const initialNumber = Number($elem.text());
        cy.get('[data-cy="plusButton"]').click({ multiple: true }).then(() => {
        const numberAfterClick = Number($elem.text());
        expect(numberAfterClick).to.eq(initialNumber + 4)
    });
    });
    
    
    })
    
    it('Verify Functionality Of Minus Button', function() {
    
        cy.get('[data-cy="counter"]').then(($elem) => {
        const initialNumber = Number($elem.text());
        cy.get('[data-cy="minusButton"]').click({ multiple: true }).then(() => {
        const numberAfterClick = Number($elem.text());
        expect(numberAfterClick).to.eq(initialNumber + 0)
    });
    });
    
    })
    
    
    it('Verify Functionality Of Delete Button', function() {
    
        cy.get('[data-cy="plusButton"]').first().click()
        cy.get('[data-cy="deleteButton"]').first().click()
        cy.get('[data-cy="counter"]').then($elem => {
        const counterNumber = Number($elem.text());
        expect(counterNumber).to.eq(0)
    });
    
    
    })

    
    it('Verify Functionality Of Recycle Button', function() {
        
        cy.get('[data-cy="deleteButton"]').click({ multiple: true })
        cy.wait(4000)
        cy.get('[data-cy="recycleButton"]').click()
    })
    
  
    it('Verify Functionality Of Refresh Button', function() {

        cy.get('[data-cy="plusButton"]').first().click()
        cy.get('[data-cy="plusButton"]').last().click()
        cy.get('[data-cy="counter"]').should($counterElem => expect(Number($counterElem.text())).to.eq(2))
        cy.get('[data-cy="refreshButton"]').click()
        cy.get('[data-cy="counter"]')
        .should($counterAfterfresh => expect(Number($counterAfterfresh.text())).to.eq(0))
    })
        

})