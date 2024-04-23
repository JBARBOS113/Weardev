class orderPage{
    constructor(){ 
        this.orders='#nav_menu1_2_1 > :nth-child(2) > .s-sidebar-link > .s-sidebar-link-text'
        this.newOrder='.add-button > .button-inner'
        this.custumer='#s2id_autogen8_search'
        this.date='#Serenity_Demo_Northwind_OrderDialog15_RequiredDate'
        this. employee='#s2id_autogen9_search'
        this.addproduct='#Serenity_Demo_Northwind_OrderDialog33_DetailList > .grid-toolbar > .tool-group > .add-button > .button-inner'
        this.product='#s2id_autogen15_search'
        this.bottonSaveprodu='[class="tool-button save-and-close-button icon-tool-button"]'
    }
    
    orderUsers(){
        cy.get(this.orders).dblclick({force:true}).wait(500)
        cy.get(this.newOrder).dblclick({force:true})
    }

    craeteOrder(){

        //cy.get('#select2-chosen-15')
       
        cy.get(this.custumer).type('Indra',{force:true}).wait(2000)
        cy.get(this.date).type('05/22/2024',{force:true})
        cy.get(this.employee).type('Laura Callahan', {force:true})
        cy.get(this.addproduct).dblclick({force:true})
        cy.get(this.product).type('Cocacola',{force:true})
        cy.get(this.bottonSaveprodu).click({ multiple: true, force: true })
    }


}export const OrderPage = new orderPage;