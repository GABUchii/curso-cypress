import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUserName(username){
        SignupElements.textBoxes.username.invoke('val',username)
    }

    static insertPassword(password){
        SignupElements.textBoxes.password.invoke('val',password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.singup.click();
    }
    static singup(username,password){
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnSignupButton();

    }
    //metodo para verificar que muestre el mensaje de alerta
      static verifySignupSuccesFullMessageDisplayed(){//aca estamos verificando que se muestre esa alerta
        CommonPageMethods.verifyAlert("Sign up successful")// aca llamamos la metodo que creamos y le pasamos el msj que nos deberia mostrar en este caso seria sing un successful 
    }

    // este metodo servira para verificar que muestre el msj de alerta cuando el usuario ya este registrado 

static verifyThatThisUserAlreadyExistMessageIsDisplayed(){
    CommonPageMethods.verifyAlert('this user already exist.')
}


}