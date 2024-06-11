import common from "mocha/lib/interfaces/common";
import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBLaze(){
        cy.clearCookies()//este metodo limpia el browser antes de ejecutarlo para no falle
        cy.visit(CommonPageData.url);
    }
    static clickOnHomeOption(){
        CommonPageElements.topMenu.Home.click();
    }
    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }
    static clickOnAboutUstOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }
    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }
    static clickOnSignupOption(){
        CommonPageElements.topMenu.signup.click();
    }

    static verifyAlert(expectedMessage){//este metodo verifica que se esta mostrando una alerta 
        cy.on('window:alert',(str)=>{
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


    static verifySignedUser(username) { // verificar el usuario logueado/registrado
        cy.wait(2000);//espera 2 segundos 
        //obtiene el texto del elemento y realiza una verificacion intermedia
        CommonPageElements.signedUser.invoke('text').then((text) => {
            //imprime el texto para depurarlo
            cy.log(`texto del elemento : "${text.trim()}`);
            //realiza la verificacion
            expect(text.trim().toLowerCase()).to.equal(`welcome ${username.toLowerCase()}`);
        });
    }

  //static verifySignedUser(username){//verificar el usuario logueado/registrado 
        //CommonPageElements.signedUser.should("have.text",`welcome ${username}`);
    //}


}