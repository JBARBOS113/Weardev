class productPage{
    constructor(){ 
        this.menuProduc='#nav_menu1_2_1 > :nth-child(3) > .s-sidebar-link > .s-sidebar-link-text'
        this.addProduct='.add-button > .button-inner'
        this.ProductName='#ProductDialog9_ProductName'
       // this.imagen='input[type="file"]'
        this.clickchek='#ProductDialog9_Discontinued'
        this.supplier='#s2id_autogen4_search'
        this.category='#s2id_autogen5_search'
        this.QuantityPerUnit='#ProductDialog9_QuantityPerUnit'
        this.UnitPrice='#ProductDialog9_UnitPrice'
        this.UnitsInStock='#ProductDialog9_UnitsInStock'
        this.UnitsOnOrder='#ProductDialog9_UnitsOnOrder'
        this.ReorderLevel='#ProductDialog9_ReorderLevel'
        this.SaveProduct='[class="tool-button save-and-close-button icon-tool-button"]'
    }
   
    ProductUser(){
        cy.get(this.menuProduc).dblclick({force:true})
    }
    formProduct(){
        cy.get(this.addProduct).dblclick({force:true}).wait(1000)
        cy.get(this.ProductName).type('Cocacola',{force:true})
        
        /*cy.fixture('pro.jpg').then((fileContent) => {
            cy.get(this.imagen).attachFile({
              fileContent: fileContent,
              filePath: 'pro.jpg',
              mimeType: 'image/jpeg'
            });
          });*/
        cy.get(this.clickchek).check({force:true})
        cy.get(this.supplier).type('Aux joyeux ecclésiastiques',{force:true})
        cy.get(this.category).type('Beveranges',{force:true})
        cy.get(this.QuantityPerUnit).type('12',{force:true})
        cy.get(this.UnitPrice).type('2000',{force:true})
        cy.get(this.UnitsInStock).clear({force:true}).type('100',{force:true})
        cy.get(this.UnitsOnOrder).clear({force:true}).type('10',{force:true})
        cy.get(this.ReorderLevel).clear({force:true}).type('5',{force:true})
        cy.get(this.SaveProduct).click({ multiple: true, force: true })
        
    }

}export const ProductPage = new productPage;