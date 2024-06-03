export class CartElements{
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');

            },
        };
    }
//
    static get links(){
        return{
            delete(productName){//recordar que cuando le pasamos un parametro no lleva get 
                 return cy.contains("td", productName).closest("tr").find("a");//aca en esta linea lo que le digo es
                //buscame un td que tenga el texto(nombre del telefono), una vez que estes alli
                //muevete al ancestro con el metodo close (tr) y aqui busca el hijo o nieto el descendente 
            // en cypress podemos pedirle que busque el descendiente usando el metodo find 
            },
        };
     }
}