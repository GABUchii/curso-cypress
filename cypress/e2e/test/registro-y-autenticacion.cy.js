import { SignInMethod } from "firebase/auth"
import { CommonPageData } from "../pages/common-page/common-page.data"
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"

describe(CommonPageData.testSuites.resgistroYAutenticacion,()=>{//aca llamamos a la variable que ya declaramos en commonpage
    it("Registro de usuario valido",()=>{
        Logger.stepNumber(1)//aca vamos enumerando cada paso 
        Logger.step('navegar a la pagina de inicio')//describimos que hacemos en ese paso 
        CommonPageMethods.navigateToDemoBLaze()//le pasamos el metodo para que valla a la pagina como se le indica
        
        Logger.stepNumber(2)//aca vamos enumerando cada paso 
        Logger.step('hacer click en "Sing up "en la barra de navegacion')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)//paso3
        Logger.step('completar todos los campos obligatorios con informacion valida')//descripcion
        SignupMethods.insertUserName('sfgdfhfghklfldj')//llamo al metodo que inserta usuario y le paso entre parentesis el usuario que en este caso es cualquiera 
        SignupMethods.insertPassword('sfgdfhfghklfldj')//mismo con la contraseña 

        Logger.stepNumber(4)//paso 4
        Logger.step('hacer click en "Sing up "en la barra de navegacion')//hacer click en boton signup
        SignupMethods.clickOnSignuoButton();//metodo que hace click en el boton
        Logger.verification('verificar que se mustre el mensaje " Sign up successful"')
        SignupMethods.verifySignupSuccesFullMessageDisplayed('Sign up successful')
    })

})