import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { commonData, attFileAllure } from '../../common/common'
import { createPokemonTeam } from '../../../fixtures/pokemonTeamRequest'
export let commonDataPostTeam = {}

When(
	'Verify if teamName returning in response header is equal to informed in the request',
	() => {
		expect(commonData.teamNameRequest).to.equal(commonData.teamNameResponse)
	}
)

Given(
	'I perform a POST request for {string} informing a teamName that already exists',
	path => {
		let pokemonTeamRequest = createPokemonTeam(commonData.teamNameResponse)

		cy.api({
			failOnStatusCode: false,
			method: 'POST',
			url: Cypress.env('URL_POKEMON_TEAM') + path,
			headers: {
				'Content-Type': 'application/json',
			},
			body: pokemonTeamRequest,
		}).as('pokemon-team-request')

		attFileAllure(pokemonTeamRequest, 'request', 'pokemon-team-request')

		cy.get('@pokemon-team-request').then(response => {
			attFileAllure(response.body, 'response', 'pokemon-team-error')

			commonData.responseError = response.body[0].description

			commonData.statusCodeError = response.body[0].code
		})
	}
)

Given(
	'I perform a POST request for {string} informing a Pokemon that not exists in field {string}',
	(path, field) => {
		const generateNumber = Math.random()

		const teamName = `pokemonTeam${generateNumber}`

		let pokemonTeamRequest = createPokemonTeam(teamName)

		pokemonTeamRequest[field] = 'Teste@@123'

		cy.api({
			failOnStatusCode: false,
			method: 'POST',
			url: Cypress.env('URL_POKEMON_TEAM') + path,
			headers: {
				'Content-Type': 'application/json',
			},
			body: pokemonTeamRequest,
		}).as('pokemon-team-request')

		attFileAllure(pokemonTeamRequest, 'request', 'pokemon-team-request')

		cy.get('@pokemon-team-request').then(response => {
			attFileAllure(response.body, 'response', 'pokemon-team-error')

			commonData.responseError = response.body[0].description

			commonData.statusCodeError = response.body[0].code
		})
	}
)

Given(
	'I perform a POST request for {string} not informing the field {string}',
	(path, field) => {
		const generateNumber = Math.random()

		const teamName = `pokemonTeam${generateNumber}`

		let pokemonTeamRequest = createPokemonTeam(teamName)

		pokemonTeamRequest[field] = null

		cy.api({
			failOnStatusCode: false,
			method: 'POST',
			url: Cypress.env('URL_POKEMON_TEAM') + path,
			headers: {
				'Content-Type': 'application/json',
			},
			body: pokemonTeamRequest,
		}).as('pokemon-team-request')

		attFileAllure(pokemonTeamRequest, 'request', 'pokemon-team-request')

		cy.get('@pokemon-team-request').then(response => {
			attFileAllure(response.body, 'response', 'pokemon-team-error')

			commonData.responseError = response.body[0].description

			commonData.statusCodeError = response.body[0].code
		})
	}
)
