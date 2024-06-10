export class LoginElements{
    static get textBoxes(){//los textboxes son los input 
        return{
            get username(){
               return cy.get('input#loginusername');//aca pasamos el selector del input 
            },
            get password(){
                 return cy.get('input#loginpassword');//aca pasamo el selector del password
            }
        };
    }
static get buttons(){//aca armamos la clase para los botones 
    return{
        get close(){//este es el boton close 
            return cy.get('div[id="logInModal"] button').eq(1);//este es el selector del boton
        },
        get login(){//boton log in
            return cy.contains('button', 'Log in');//este es el selector del boton

        }
    }
}
}