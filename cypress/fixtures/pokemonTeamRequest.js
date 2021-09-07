function createPokemonTeam(teamPokemon) {
	let bodyPokemonTeamRequest = {
		teamName: teamPokemon,
		firstPokemon: 'Bulbasaur',
		secondPokemon: 'Squirtle',
		thirdPokemon: 'Bagon',
		fourthPokemon: 'Mudkip',
		fifthPokemon: 'Jolteon',
		lastPokemon: 'Zorua',
	}
	return bodyPokemonTeamRequest
}

module.exports = {
	createPokemonTeam,
}
