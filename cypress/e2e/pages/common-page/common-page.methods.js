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
//este metodo es para que cree un usuario y contraseña aleatorio
    static generateRandomString(length = 10) { //le paso como parametro que reciba 10 caracteres 
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';//de aqui le indico que el string sea solo en minuscula
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }


}