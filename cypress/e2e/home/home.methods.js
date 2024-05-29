import { HomeElements } from "./home.elements";

export class HomeMethods{
    static clickOnPhone(){
        HomeElements.categoriesMenu.phones.click();
    }
    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }
    static clickOnMonitors(){
        HomeElements.categoriesMenu.monitors.click();
}

static clickOnProductLink(productName){
    HomeElements.product(productName).click();
}
}