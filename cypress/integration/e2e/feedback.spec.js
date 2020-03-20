import { FeedbackURL,URL,USERNAME,PASSWORD } from '../../../config'
import FeedBackPage from '../../page-objects/pages/FeedbackPage'

describe('Submit feedback', () => {
    before(() => {
      cy.visit(FeedbackURL)  
    });


    it('submit feedback', () => {
        FeedBackPage.submitFeedback()
        cy.get('#feedback-title').should('have.text','Feedback')
        
    });
});
