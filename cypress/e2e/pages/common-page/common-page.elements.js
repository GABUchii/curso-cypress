export class CommonPageEments{
    static get topMenu(){
        return{
            get Home(){
                return cypress.contains("a","Home");
            },
            get contact(){
                return cypress.contains("a","contact");

            },

            get aboutUs(){
                return cypress.contains("a","About us ");
        },
            get cart(){
                return cypress.contains("a","Cart");

    },
            get login(){
                return cypress.contains("a","Log In");
},
            get signUp(){
                return cypress.contains("a","Sign Up");
},//segui video 59 que se quedo a la mitad
};


}

}