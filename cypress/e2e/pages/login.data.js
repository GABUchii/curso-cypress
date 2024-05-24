//aca pondremos informaciones que son utiles para el login
export class LoginData{
    static get invalidCredentials(){//aca creamos esta data porque vamos a pasarle 
        return{//username y password incorrectos donde en teoria esperamo que falle
            username:"abc",
            password:"abc",
         };
    }
}