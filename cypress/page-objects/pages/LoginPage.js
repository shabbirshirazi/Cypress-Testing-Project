import BasePage from '../pages/BasePage'
export default class LoginPage extends BasePage{
    static login(username,password){
        cy.login(username,password)
    }

    static clickForgotPassword(){
    
        cy.contains('Forgot your password?').click()
  
    }

    static displayErrorMessage(){
        cy.get('.alert-error').should('be.visible')
    }

    static invalidLogin(){
        cy.get('.alert-error').should('be.visible')
        
    }
  

}