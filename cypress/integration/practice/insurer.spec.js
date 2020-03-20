/// <reference types="Cypress" />
 
describe("Broker user journey", function(){
    const brokerName = 'CypressTests'
    this.beforeAll("Log into Insurer System", function(){
        cy.clearCookies()
        cy.clearLocalStorage()
       
    })
 
    // this.beforeEach("open Broker page", () => {
    //     cy.wait(5500)
    //     cy.get('#systemDropdown').click()
    //     cy.contains('Broker').click()
    // })
 
    it.only("should be able to add broker", () =>{
        //Given
       // cy.wait(5500)


       const options = {
        method: 'Post',
          url: 'https://auth-dev-uitester.auth.eu-west-1.amazoncognito.com/login',
      
          body: {
            username: 'ui-tester',
            password: 'Super$ecret1',
            client_id: '2glc215kg6pc57f72qme16pciv',
            redirect_uri: 'https://uitester.app.dev.insurer.cdlcloud.co.uk/login',
            response_type: 'code'
            
          }
      }


       cy.request(options).then((resp)=>{

        cy.log(resp)
       })


    //    cy.visit('https://auth-dev-uitester.auth.eu-west-1.amazoncognito.com/login?redirect_uri=https://uitester.app.dev.insurer.cdlcloud.co.uk/login&response_type=code&client_id=2glc215kg6pc57f72qme16pciv')
    //    cy.get('[name=cognitoSignInForm]').eq(1).find('#signInFormUsername').type('ui-tester')
    //    cy.get('[name=cognitoSignInForm]').eq(1).find('#signInFormPassword').type('Super$ecret1')
    //    cy.get('[name=cognitoSignInForm]').eq(1).find('[name=signInSubmitButton]').click()
    //     cy.get('#systemDropdown').click()
    //      cy.contains('Broker').click()
    //     cy.get('#newBroker').click()
 
    //     //When
    //     cy.get('#abiCode').type('A1234')
    //     cy.get('#name').type(brokerName)
    //     cy.get('#save').click()
 
    //     //Then
    //     cy.get('#back').click()
    //     cy.get('#brokerName').should('have.text', 'CypressTests')
    })
 
    it("User should be able to add Contact details to the existing broker", () =>{
        // Given
        cy.wait(5500)
        //cy.pause()
        cy.get('#systemDropdown').click()
        cy.contains('Broker').click()
       
 
        //When
        cy.get(`[id=CypressTestsEdit]`).click()
        cy.get('[role=tablist]').find('li').eq(1).click()
        cy.get('#addContact').click()
        cy.get('#departmentOrTypeOfContact0').select('Accounts')
        cy.get('#name0').type('Broker')
    })
})