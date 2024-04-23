class customerPage{
    constructor(){ 
        this.customerNew='.add-button > .button-inner'
        this.CustomerID='#Serenity_Demo_Northwind_CustomerDialog9_CustomerID'
        this.CompanyName='#Serenity_Demo_Northwind_CustomerDialog9_CompanyName'
        this.ContactName='#Serenity_Demo_Northwind_CustomerDialog9_ContactName'
        this.ContactTitle='#Serenity_Demo_Northwind_CustomerDialog9_ContactTitle'
        this.Representatives='#s2id_autogen10'
        this.dAddress='#Serenity_Demo_Northwind_CustomerDialog9_Address'
        this.countryList='#s2id_autogen11_search'
        this.cityList='#s2id_autogen12_search'
        this.Region='#Serenity_Demo_Northwind_CustomerDialog9_Region'
        this.PostalCode='#Serenity_Demo_Northwind_CustomerDialog9_PostalCode'
        this.phone='#Serenity_Demo_Northwind_CustomerDialog9_Phone'
        this.fax='#Serenity_Demo_Northwind_CustomerDialog9_Fax'
        this.LastContactDate='#Serenity_Demo_Northwind_CustomerDialog9_LastContactDate'
        this.lascontactelist='#s2id_autogen13_search'
        this.email='#Serenity_Demo_Northwind_CustomerDialog9_Email'
        this.SendBulletin='#Serenity_Demo_Northwind_CustomerDialog9_SendBulletin'
        this.bottonsave='[class="tool-button save-and-close-button icon-tool-button"]'   
    }
    newCustumeradd(){
        cy.get(this.customerNew).dblclick({force:true})
    }
    formUserfill(){
        cy.get(this.CustomerID).type('JJJJJ',{force:true}).wait(1000)
        cy.get(this.CompanyName).type('Indra',{force:true})
        cy.get(this.ContactName).type('Julian Perez',{force:true})
        cy.get(this.ContactTitle).type('Ingeniero',{force:true})
        cy.get(this.Representatives).type('Laura Callahan', {force:true})
        cy.get(this.dAddress).type('cara 14- 25-30 sur',{force:true})
        cy.get(this.countryList).type('Colombia',{force:true})
        cy.get(this.cityList).type('Ibague',{force:true})
        cy.get(this.Region).type('Tolima',{force:true})
        cy.get(this.PostalCode).type('123456',{force:true})
        cy.get(this.phone).type('3143235555',{force:true})
        cy.get(this.fax).type('56922454',{force:true})
        cy.get(this.LastContactDate).type('22/04/2024',{force:true})
        cy.get(this.lascontactelist).type('Andrew Fuller',{force:true})
        cy.get(this.email).type('Jose@gmail.com',{force:true})
        cy.get(this.SendBulletin).check({force:true})
        cy.get(this.bottonsave).click({ multiple: true, force: true })
       
    }

}export const CustomerPage = new customerPage;