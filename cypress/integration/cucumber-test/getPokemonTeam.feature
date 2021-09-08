Feature: Tests GET Pokemon Team

  @ct001_get_pokemon_team
  Scenario: [CT_001] - Get a Pokemon Team
    Given I perform a POST request for 'team' to create a new Pokemon team
    When I inform a teamName in the path 'team/' to get a Pokemon Team
    Then Verify if the return Pokemons are the same informed in the request

  @ct002_get_pokemon_team
  Scenario: [CT_002] - Get a Pokemon Team informing a team that not exists
    Given I inform a teamName in the path 'team/' that not exists
    Then Verify if returning the message 'Pokemon Team Not Found' and response code '404.001'
