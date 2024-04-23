class homePage{
    constructor(){ 
        this.getoptionhome='#s-sidebar-toggler > .fa'
        this.northwind='[href="#nav_menu1_2_1"] > .s-sidebar-link-text'
        this.customer='#nav_menu1_2_1 > :nth-child(1) > .s-sidebar-link > .s-sidebar-link-text'
    }
    clickoptionHome(){
        cy.get(this.getoptionhome).dblclick({force:true}).wait(1000)
    }
    northwindclick(){
        cy.get(this.northwind).dblclick({force:true}).wait(1000)
    }
    clickcustomer(){
        cy.get(this.customer).click({force:true})
    }
}export const HomePage = new homePage;
