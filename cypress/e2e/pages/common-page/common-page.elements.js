export class CommonPageEments{
    static get topMenu(){
        return{
            get Home(){
                return cy.contains("a","Home");
            },
            get contact(){
                return cy.contains("a","contact");

            },

            get aboutUs(){
                return cy.contains("a","About us ");
        },
            get cart(){
                return cy.contains("a","Cart");

    },
            get login(){
                return cy.get('a[data-target="#logInModal"]')  //cy.contains("a","Log In");
},
            get signup(){
                return  cy.get('a[data-target="#signInModal"]')   //cy.contains("a","Sign Up");
},
};


}

}