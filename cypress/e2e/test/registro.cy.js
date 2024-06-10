import { SignInMethod } from "firebase/auth"
import { CommonPageData } from "../pages/common-page/common-page.data"
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { SignupMethods } from "../pages/signup/signup.methods"
import { Logger } from "../util/logger"
const user = CommonPageMethods.generateRandomString()//aca creamos una variable donde la igualamos con el metodo para luego llamarla esta es para el usuario 
const password =CommonPageMethods.generateRandomString()//aca hacemos lo mismo para la constraseña
const existingUser = 'random01'//aca creamos una variable para que realice la segunda prueba el usuario deberia ser invalido porque ya es existente

describe(CommonPageData.testSuites.resgistro,()=>{//aca llamamos a la variable que ya declaramos en commonpage
    it("Registro de usuario valido",()=>{
        Logger.stepNumber(1)//aca vamos enumerando cada paso 
        Logger.step('navegar a la pagina de inicio')//describimos que hacemos en ese paso 
        CommonPageMethods.navigateToDemoBLaze()//le pasamos el metodo para que valla a la pagina como se le indica
        
        Logger.stepNumber(2)//aca vamos enumerando cada paso 
        Logger.step('hacer click en "Sing up "en la barra de navegacion')
        CommonPageMethods.clickOnSignupOption();

        Logger.stepNumber(3)//paso3
        Logger.step('completar todos los campos obligatorios con informacion valida')//descripcion
        SignupMethods.insertUserName(user)//aca llamo al metodo y le paso como parametro la variable creada arriba con el usuario 
        SignupMethods.insertPassword(password)//aca hago lo mismo para la contraseña 

        Logger.stepNumber(4)//paso 4
        Logger.step('hacer click en "Sing up "en la barra de navegacion')//hacer click en boton signup
        SignupMethods.clickOnSignupButton();//metodo que hace click en el boton
        Logger.verification('verificar que se mustre el mensaje " Sign up successful"')
        SignupMethods.verifySignupSuccesFullMessageDisplayed()
    });

    it("Registro de usuario invalido",()=>{
            Logger.stepNumber(1)//aca vamos enumerando cada paso 
            Logger.step('navegar a la pagina de inicio')//describimos que hacemos en ese paso 
            CommonPageMethods.navigateToDemoBLaze()//le pasamos el metodo para que valla a la pagina como se le indica
            
            Logger.stepNumber(2)//aca vamos enumerando cada paso 
            Logger.step('hacer click en "Sing up "en la barra de navegacion')
            CommonPageMethods.clickOnSignupOption();
    
            Logger.stepNumber(3)//paso3
            Logger.step('completar todos los campos obligatorios con informacion invalida')//descripcion
            SignupMethods.insertUserName(existingUser)//aca llamo al metodo y le paso como parametro la variable creada arriba con el existUser
            SignupMethods.insertPassword(password)//aca hago lo mismo para la contraseña pero lo dejo que la cree aleatoriamente total con el usuario ya existente deberia fallar igual
    
            Logger.stepNumber(4)//paso 4
            Logger.step('hacer click en "Sing up "en la barra de navegacion')//hacer click en boton signup
            SignupMethods.clickOnSignupButton();//metodo que hace click en el boton
            Logger.verification('verificar que se mustre el mensaje " Sign up successful"')
            SignupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed()
        })



})




