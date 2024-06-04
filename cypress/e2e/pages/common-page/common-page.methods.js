import common from "mocha/lib/interfaces/common";
import { CommonPageData } from "./common-page.data";
import { CommonPageEments } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBLaze(){
        cy.clearCookies()//este metodo limpia el browser antes de ejecutarlo para no falle
        cy.visit(CommonPageData.url);
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.Home.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.contact.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.aboutUs.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.cart.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.login.click();
    }
    static clickOnHomeOption(){
        CommonPageEments. topMenu.signUp.click();
    }

    static verifyAlert(expectedMessage){//este metodo verifica que se esta mostrando una alerta 
        cypress.on('window:alert',(str)=>{
            expect(srt).to.equal(expectedMessage)//y la alerta muestra el texto que aqui le estamos pasando 
        })
    }

}