import{LoginMethods}from './pages/login.methods'

describe('template spec', () => {
  it('passes', () => {
    const usuario= 'random01';
    const contraseña='random01'
    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login(usuario,contraseña)
    cy.get('a#nameofuser').should('contain.text',usuario)
    cy.wait(5000)
  })
})