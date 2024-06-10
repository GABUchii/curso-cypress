
//aca lo que estamos haciendo es crear variables que luego vamos a reutlizar por eso las 
//declaramos aca para luego llamarlas y no tener que escribirlas siempre 
export class CommonPageData{
    static get url(){
        return 'https://demoblaze.com/cart.html'
    }

    static get testSuites(){
        return{
            resgistro:"Registro",
            autenticacion:"Autenticacion",
            catalogoYCompra:"Catalogo y compra",
        };
    }
}