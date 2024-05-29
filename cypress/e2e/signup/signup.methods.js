import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUserName(username){
        SignupElements.textBoxes.username.invoke('val',username)
    }

    static insertPassword(password){
        SignupElements.textBoxes.password.invoke('val',password)
    }

    static clickOnSignuoButton(){
        SignupElements.buttons.singup.click();
    }
    static singup(username,password){
        this.insertUserName(username);
        this.insertPassword(password);
        this.clickOnSignuoButton();
    }
}//pagina 53 seguir con la 