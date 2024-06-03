export class ThankYouForYouPurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains('button', 'OK');
            },

        };
    }
    static get icons(){
        return{
          get greenChechMark(){
                return cy.get(".se-success");
            }
        }
    }
}