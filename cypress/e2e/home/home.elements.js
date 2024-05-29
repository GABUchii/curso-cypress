export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones')
            },
            get laptops(){
                return cy.contains('a', 'Laptops')
            },
            get monitors(){
                return cy.contains('a', 'Monitors')
            }
        }
    }

    static product(productName){//aca creamos un selector dinamico para que podamos solo pasar el nombre del producto que deseamos buscar y automaticamente lo busque
        return cy.contains('a',productName)//ej ('a', samsung s23 ultra)
    }
}