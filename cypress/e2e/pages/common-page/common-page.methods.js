import common from "mocha/lib/interfaces/common";
import { CommonPageData } from "./common-page.data";
import { CommonPageEments } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBLaze(){
        cypress.visit(CommonPageData.url);
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.Home.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.contact.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.aboutUs.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.cart.click();
    }
    static clickOnHomeOption(){
        CommonPageEments.topMenu.login.click();
    }
    static clickOnHomeOption(){
        CommonPageEments. topMenu.signUp.click();
    }
}