export let commonData = {}
import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import { createPokemonTeam } from '../../fixtures/pokemonTeamRequest'
import { commonDataPostTeam } from '../cucumber-test/postPokemonTeam/postPokemonTeamStep'

export function logInformation(obj) {
	return cy.log(JSON.stringify(obj, null, 4))
}

export function attFileAllure(obj, type, information) {
	const generateNumber = Math.random().toString(10)

	cy.writeFile(
		`cypress/files/pokemon-team/${type}_${generateNumber}_${information}.txt`,
		obj
	)

	cy.allure().fileAttachment(
		`pokemon-team ${type} ${information} `,
		`cypress/files/pokemon-team/${type}_${generateNumber}_${information}.txt`,
		'text/plain'
	)
}

defineStep(
	'I perform a POST request for {string} to create a new Pokemon team',
	path => {
		const generateNumber = Math.random()

		commonData.teamNameRequest = `pokemonTeam${generateNumber}`

		commonData.pokemonTeamRequest = createPokemonTeam(
			commonData.teamNameRequest
		)

		cy.api({
			method: 'POST',
			url: Cypress.env('URL_POKEMON_TEAM') + path,
			headers: {
				'Content-Type': 'application/json',
			},
			body: commonData.pokemonTeamRequest,
		}).as('pokemon-team-request')

		attFileAllure(
			commonData.pokemonTeamRequest,
			'request',
			'pokemon-team-request'
		)

		cy.get('@pokemon-team-request').then(response => {
			commonData.teamNameResponse = response.headers.teamname
			commonData.statusCodeTeam = response.status
		})
	}
)

defineStep(
	'Verify if returning the message {string} and response code {string}',
	(description, status) => {
		expect(commonData.responseError).to.equal(description)

		expect(commonData.statusCodeError).to.equal(status)
	}
)

defineStep('Verify if the status code is {int}', code => {
	expect(commonData.statusCodeTeam).to.equal(code)
})
