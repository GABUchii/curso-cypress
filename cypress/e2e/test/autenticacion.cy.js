import { describe } from 'mocha'
import{CommonPageData} from '../pages/common-page/common-page.data'
import { Logger } from '../util/logger'
import{CommonPageMethods} from '../pages/common-page/common-page.methods'
import { LoginMethods } from '../pages/login/login.methods'
import { LoginData } from '../pages/login/login.data'
describe(CommonPageData.testSuites.autenticacion,()=>{
    it('Inicio de sesion valido',()=>{

        Logger.stepNumber(1)
        Logger.step('navegar a la pagina de inicio')
        CommonPageMethods.navigateToDemoBLaze();

        Logger.stepNumber(2)
        Logger.step('hacer click en "Log in" en la barra de navegacion')
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar a un nombre de usuario y contraseña validos ')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('hacer click en "Log in para iniciar sesion"')
        LoginMethods.clickOnLoginButton();
        Logger.verification('verificar que se redirige al usuario a la pagina de inicio')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)
    })
})