import BasePage from '..//pages/BasePage'
import {FeedbackURLURL} from '../../../config'


export default class FeedbackPage extends BasePage{
    
    static load(){
        cy.visit(FeedbackURL)
    }

    static submitFeedback(){
        cy.fixture('feedback').then(data=>{

            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.message)
            cy.get('[type=submit]').click()
            
        })
    }

}