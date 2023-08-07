///<reference types="cypress"/>

describe('Login Page Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('*[class^="login_logo"]').should('be.visible')
    })

    it('Should be able to login with standard user', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#inventory_container').should('be.visible')
    })

    it('Should not be able to login with invalid username', () => {
        cy.get('#user-name').type('uyeuriower')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#login_button_container')
        .should('contains.text', 
        'Epic sadface: Username and password do not match any user in this service')
    })

    it('Should not be able to login with invalid password', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sakjsgkqjgauce')
        cy.get('#login-button').click()
        cy.get('#login_button_container')
        .should('contains.text', 
        'Epic sadface: Username and password do not match any user in this service')
    })
    
    it('Should not be able to login with locked user', () => {
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#login_button_container')
        .should('contains.text', 
        'Epic sadface: Sorry, this user has been locked out.')
    })
})