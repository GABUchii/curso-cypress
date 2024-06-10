import{LoginMethods}from './pages/login/login.methods'
import { Logger } from './util/logger';

describe('template spec', () => {
  it('passes', () => {
    const usuario= 'random01';
    const contraseña='random01'

    Logger.stepNumber(1)//aca llamamos al lo que hemos detallado en logger que son los pasos en este caso es el paso numero 1
    Logger.step('navegate to Demoblaze page')//aca le pasamos la descripcion que debe hacer el paso numero 1(seria ingresar a la pagina)
    cy.visit('https://demoblaze.com/')


    Logger.stepNumber(2)//aca el paso numero 2
    Logger.step('click on "Login" link ')//click en el link de login
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)//paso numero 3
    Logger.step(`login with this credentials:" ${usuario}/${contraseña}"`)//aca le decimos que se logea con estas credenciales usuario y contraseña
    LoginMethods.login(usuario,contraseña)
    Logger.verification(`the Home should show "Welcome ${usuario}" text`)

    cy.get('a#nameofuser').should('contain.text',usuario)
    cy.wait(5000)
  })
})