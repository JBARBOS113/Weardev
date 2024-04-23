import { HomePage } from "../../../support/POM/home/homePage";
import { LoginPage } from "../../../support/POM/login/loginPage";
import { OrderPage } from "../../../support/POM/order/orderPage";
import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('user is in the page of order',()=>{
    LoginPage.visit()
}) 
Given('As user needs to do login',()=>{
    LoginPage.loguinPageUser()
}) 
Given('user need to create a new order',()=>{
    HomePage.clickoptionHome()
})
Given('I need one order',()=>{
    OrderPage.orderUsers()
})
When('I need to create a new order',()=>{
   OrderPage.craeteOrder()
})