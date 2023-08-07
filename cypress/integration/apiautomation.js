///<reference types="cypress"/>
describe('HTTP Request', () => {
    it('Post Call', () => {
        cy.request( {
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).as('newUser')
        cy.get('@newUser').its('body')
        .should('include', {"name": "morpheus", "job": "leader"})
        cy.get('@newUser').its('status').should('equal', 201)
    })

    it('Get Call', () => {
            cy.request('GET', 'https://reqres.in/api/users')
        .its('status').should('equal', 200)
    })

    it('Put Call', () => {
        cy.request( {
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "Moduit",
                "job": "leader"
            }
    
        }).as('newUser')
        cy.get('@newUser').its('body')
        .should('include', {"name": "Moduit", "job": "leader"})
        cy.get('@newUser').its('status')
        .should('equal', 200)
    })

    it('Delete Call', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2')
        .its('status')
        .should('equal', 204)
    })

})