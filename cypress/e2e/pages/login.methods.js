import{LoginElements} from './login.elements'

export class LoginMethods{// en este metodo le vamos a indicar 
    static insertUsername(username){
        LoginElements.textBoxes.username.type(username)//de la clase LoginElements busca el grupo que se llama textboxes encuenta alli 
    }//un elemento que se llama username y inserta el username que le estamos pasando aqui 

    static insertPassword(password){
        LoginElements.textBoxes.password.type(password)
    }

    static clickOnLoginButton(){
        LoginElements.buttoms.login.click()//aca creamos el metodo para el boton login donde le estamos indicando que en la clase LoginElements busque el elemento buttons y haz clic en login 
    }
    static login(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()

    }
}

