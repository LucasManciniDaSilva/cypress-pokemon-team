import { defineStep } from 'cypress-cucumber-preprocessor/steps'
import { commonData, attFileAllure } from './common'

defineStep(
	'I inform a teamName in the path {string} to get a Pokemon Team',
	path => {
		cy.api({
			method: 'GET',
			url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
			headers: {
				'Content-Type': 'application/json',
			},
		}).as('pokemon-team-get')
	}
)

defineStep(
	'I inform a teamName in the path {string} to delete a Pokemon Team',
	path => {
		cy.api({
			method: 'DELETE',
			url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
			headers: {
				'Content-Type': 'application/json',
			},
		}).as('pokemon-team-delete')
	}
)

defineStep(
	'Verify if the return Pokemons are the same informed in the request',
	() => {
		cy.get('@pokemon-team-get').then(response => {
			attFileAllure(response.body, 'response', 'pokemon-team-get')

			expect(response.body.firstPokemon.name).to.equal(
				commonData.pokemonTeamRequest.firstPokemon.toLowerCase()
			)

			expect(response.body.secondPokemon.name).to.equal(
				commonData.pokemonTeamRequest.secondPokemon.toLowerCase()
			)

			expect(response.body.thirdPokemon.name).to.equal(
				commonData.pokemonTeamRequest.thirdPokemon.toLowerCase()
			)

			expect(response.body.fourthPokemon.name).to.equal(
				commonData.pokemonTeamRequest.fourthPokemon.toLowerCase()
			)

			expect(response.body.fifthPokemon.name).to.equal(
				commonData.pokemonTeamRequest.fifthPokemon.toLowerCase()
			)

			expect(response.body.lastPokemon.name).to.equal(
				commonData.pokemonTeamRequest.lastPokemon.toLowerCase()
			)
		})
	}
)
