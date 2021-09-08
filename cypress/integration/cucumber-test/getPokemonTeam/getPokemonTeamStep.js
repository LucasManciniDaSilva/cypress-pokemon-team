import { commonData, attFileAllure } from '../../common/common'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
export let commonDataGetTeam = {}

When('I inform a teamName in the path {string} to get a Pokemon Team', path => {
	cy.api({
		failOnStatusCode: false,
		method: 'GET',
		url: Cypress.env('URL_POKEMON_TEAM') + path + commonData.teamNameResponse,
		headers: {
			'Content-Type': 'application/json',
		},
	}).as('pokemon-team-get')
})

Then(
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

Given('I inform a teamName in the path {string} that not exists', path => {
	const generateNumber = Math.random()

	const teamName = `pokemonTeam${generateNumber}`

	cy.api({
		failOnStatusCode: false,
		method: 'GET',
		url: Cypress.env('URL_POKEMON_TEAM') + path + teamName,
		headers: {
			'Content-Type': 'application/json',
		},
	}).as('pokemon-team-get-error')

	cy.get('@pokemon-team-get-error').then(response => {
		attFileAllure(response.body, 'response', 'pokemon-team-get-error')

		commonData.responseError = response.body[0].description

		commonData.statusCodeError = response.body[0].code
	})
})
