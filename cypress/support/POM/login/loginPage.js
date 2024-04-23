class loginPage{
    constructor(){ 
        this.userLoguin='#LoginPanel0_LoginButton'
    }
    visit(){
        cy.visit('/')
    }
    loguinPageUser(){
        cy.get(this.userLoguin).dblclick({force:true})
    }

}export const LoginPage = new loginPage;