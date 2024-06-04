import { Logger } from '../../util/logger'
import{LoginElements} from './login.elements'

export class LoginMethods{// en este metodo le vamos a indicar 
    static insertUsername(username){
        LoginElements.textBoxes.username.invoke( 'val', username)//de la clase LoginElements busca el grupo que se llama textboxes encuenta alli 
    }//un elemento que se llama username y inserta el username que le estamos pasando aqui ..estamos usando invoke porque de lo contrario no completa bien a la hora de ejecutar 
    //la prueba entonces cambiamos type por invoke  y ponemos val 

    static insertPassword(password){
        LoginElements.textBoxes.password.invoke( 'val', password)//lo mismo hacemos aca vamos a colocar invoke y val para que a la hora de ejecutarlo no falle
    }

    static clickOnLoginButton(){
        LoginElements.buttoms.login.click()//aca creamos el metodo para el boton login donde le estamos indicando que en la clase LoginElements busque el elemento buttons y haz clic en login 
    }
    static login(username,password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()

    }
}

