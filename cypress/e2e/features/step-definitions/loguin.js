import { HomePage } from "../../../support/POM/home/homePage";
import { LoginPage } from "../../../support/POM/login/loginPage";
import { CustomerPage } from "../../../support/POM/Custumer/custumerPage";
import { ProductPage } from "../../../support/POM/product/productPage";
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('user is in the page',()=>{
    LoginPage.visit()
}) 
Given('As user needs to do login',()=>{
    LoginPage.loguinPageUser()
}) 
Given('user need find a clien',()=>{
    HomePage.clickoptionHome()
    HomePage.northwindclick()
    HomePage.clickcustomer()
})
Given('I need to create a new Custumer',()=>{
    CustomerPage.newCustumeradd()
    CustomerPage.formUserfill()
})
Given('I need one product',()=>{
    HomePage.clickoptionHome()
    ProductPage.ProductUser()
})
