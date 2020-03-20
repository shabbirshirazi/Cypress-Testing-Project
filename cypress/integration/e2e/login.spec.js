import { URL,USERNAME,PASSWORD } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login tests', () => {
    beforeEach(() => {
        cy.visit(URL)    
        Navbar.clickSignIn()
    });

	it('login successfull', () => {

        LoginPage.login(USERNAME,PASSWORD)

        
    })

	it('Login unsuccessful', () => {

        LoginPage.login('invalid','invalid')
        LoginPage.displayErrorMessage()

    })

    it('Logout from the app', () => {
        
        LoginPage.login(USERNAME,PASSWORD)
        Navbar.logOut()
        Navbar.displaySignInButton()
    });
})
