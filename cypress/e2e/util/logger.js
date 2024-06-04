
//lo que estamos haciendo aca es describir uno a uno los pasos que vamos a seguir con las pruebas 
//luego vamos a ir a nuestros casos de pruebas y alli vamos a llamar a estos pasos y vamos a ir indicandolos en cada uno 
//vamos a spec.cy.js 
export class Logger{
    static stepNumber(number){
        const text = `step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }
    static step(description){
        const text = `step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static verification(description){
        const text =`veridication - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subStep(description){
        const text =`subtep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    static subVerification(description){
        const text = `substep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
}