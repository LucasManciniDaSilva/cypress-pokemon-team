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

function updatePokemonTeam() {
	let bodyUpdatePokemonTeamRequest = {
		firstPokemon: 'Charmander',
		secondPokemon: 'Eevee',
		thirdPokemon: 'Quilava',
		fourthPokemon: 'Umbreon',
		fifthPokemon: 'Magikarp',
		lastPokemon: 'Dratini',
	}
	return bodyUpdatePokemonTeamRequest
}

module.exports = {
	createPokemonTeam,
	updatePokemonTeam,
}
