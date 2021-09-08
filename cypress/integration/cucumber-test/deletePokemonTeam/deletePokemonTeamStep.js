import { commonData, attFileAllure } from '../../common/common'
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(
	'I perform a Get request for {string} and verify if returning the message {string} and response code {string}',
	(path, message, code) => {
		cy.api({
			failOnStatusCode: false,
			method: 'GET',
			url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
			headers: {
				'Content-Type': 'application/json',
			},
		}).as('pokemon-team-delete')

		cy.get('@pokemon-team-delete').then(response => {
			attFileAllure(response.body, 'response', 'pokemon-team-delete')

			expect(response.body[0].description).to.equal(message)

			expect(response.body[0].code).to.equal(code)
		})
	}
)
