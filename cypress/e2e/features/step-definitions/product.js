import { HomePage } from "../../../support/POM/home/homePage";
import { LoginPage } from "../../../support/POM/login/loginPage";
import { ProductPage } from "../../../support/POM/product/productPage";
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('user is in the page',()=>{
    LoginPage.visit()
}) 
Given('As user needs to do login',()=>{
    LoginPage.loguinPageUser()
}) 
Given('user need find one product',()=>{
    HomePage.clickoptionHome()
})
Given('I need one product',()=>{
    ProductPage.ProductUser()
})
When('Im create one product sucess',()=>{
    ProductPage.formProduct()
})
