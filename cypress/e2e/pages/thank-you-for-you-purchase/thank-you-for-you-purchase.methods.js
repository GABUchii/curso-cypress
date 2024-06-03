import { ThankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";


export class ThankYouForYouPurchaseMethods{
    static clicOnOkButton(){
        ThankYouForYouPurchaseElements.buttons.ok.click();

    }
    static verifyGreenCheckMarkIsDispayed(){
        ThankYouForYouPurchaseElements.icons.greenChechMark.should('exist')

    }
}