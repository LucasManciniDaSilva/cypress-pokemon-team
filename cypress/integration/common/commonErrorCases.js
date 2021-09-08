import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import { commonData, attFileAllure } from './common'

defineStep(
	'I inform a teamName to {string} request for {string} that not exists',
	(method, path) => {
		const generateNumber = Math.random()

		const teamName = `pokemonTeam${generateNumber}`

		if (method == 'PATCH') {
			cy.api({
				failOnStatusCode: false,
				method: method,
				url: Cypress.env('URL_POKEMON_TEAM') + path + teamName,
				headers: {
					'Content-Type': 'application/json',
				},
				body: commonData.pokemonTeamRequest,
			}).as('pokemon-team-get-error-not-exists')
		} else {
			cy.api({
				failOnStatusCode: false,
				method: method,
				url: Cypress.env('URL_POKEMON_TEAM') + path + teamName,
				headers: {
					'Content-Type': 'application/json',
				},
			}).as('pokemon-team-get-error-not-exists')
		}

		cy.get('@pokemon-team-get-error-not-exists').then(response => {
			attFileAllure(
				response.body,
				'response',
				'pokemon-team-get-error-not-exists'
			)

			commonData.responseError = response.body[0].description

			commonData.statusCodeError = response.body[0].code
		})
	}
)

defineStep(
	'I inform a teamName in the request {string} {string} informing nothing in the path',
	(method, path) => {
		if (method == 'PATCH') {
			cy.api({
				failOnStatusCode: false,
				method: method,
				url: Cypress.env('URL_POKEMON_TEAM') + path,
				headers: {
					'Content-Type': 'application/json',
				},
				body: commonData.pokemonTeamRequest,
			}).as('pokemon-team-error-nothing-informed')
		} else {
			cy.api({
				failOnStatusCode: false,
				method: method,
				url: Cypress.env('URL_POKEMON_TEAM') + path,
				headers: {
					'Content-Type': 'application/json',
				},
			}).as('pokemon-team-error-nothing-informed')
		}

		cy.get('@pokemon-team-error-nothing-informed').then(response => {
			commonData.statusCodeTeam = response.status
		})
	}
)
