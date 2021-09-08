import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { commonData, attFileAllure } from '../../common/common'
import { updatePokemonTeam } from '../../../fixtures/pokemonTeamRequest'

When(
	'I perform a PATCH request for {string} to update a Pokemon Team',
	path => {
		commonData.pokemonTeamRequest = updatePokemonTeam()
		cy.api({
			method: 'PATCH',
			url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
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
			commonData.statusCodeTeam = response.status
		})
	}
)

Given(
	'I perform a PATCH request for {string} informing a Pokemon that not exists in field {string}',
	(path, field) => {
		commonData.pokemonTeamRequest[field] = 'Teste@@123'

		cy.api({
			failOnStatusCode: false,
			method: 'PATCH',
			url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
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
			attFileAllure(response.body, 'response', 'pokemon-team-error')

			commonData.responseError = response.body[0].description

			commonData.statusCodeError = response.body[0].code
		})
	}
)
