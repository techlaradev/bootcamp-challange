/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url = 'https://webdriveruniversity.com/Login-Portal/index.html?';
 
Given('navigate to the webdrive login', () => {
    cy.visit(url);
});

When('type a {string} and a password {string}',(username,password) =>{
    cy.get('input[placeholder=Username]').type(username)
    cy.get('input[placeholder=Password]').type(password)
})

When('click in the button submit', () => {
cy.get('button[type=submit]').click
})

Then('should show a toast telling {string}',(message) => {
cy.on('window:alert', (alert) => {
    expect(alert).to.equal(message)
})

})