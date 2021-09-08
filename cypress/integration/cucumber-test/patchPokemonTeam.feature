Feature: Tests PATCH Pokemon Team

  @ct001_patch_pokemon_team
  Scenario: [CT_001] - Update Pokemon Team
    Given I perform a POST request for 'team' to create a new Pokemon team
    When I perform a PATCH request for 'team/' to update a Pokemon Team
    And Verify if the status code is 204
    And I inform a teamName in the path 'team/' to get a Pokemon Team
    Then Verify if the return Pokemons are the same informed in the request


  @ct002_patch_pokemon_team
  Scenario: [CT_002] - Update Pokemon Team informing a team that not exists
    Given I inform a teamName to 'PATCH' request for 'team/' that not exists
    Then Verify if returning the message 'Pokemon Team Not Found' and response code '404.001'



  @ct003_patch_pokemon_team
  Scenario: [CT_003] - Update Pokemon Team informing a Pokemon that not exists in field firstPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'firstPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct004_patch_pokemon_team
  Scenario: [CT_004] - Update Pokemon Team informing a Pokemon that not exists in field secondPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'secondPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct005_patch_pokemon_team
  Scenario: [CT_005] - Update Pokemon Team informing a Pokemon that not exists in field thirdPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'thirdPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct006_patch_pokemon_team
  Scenario: [CT_006] - Update Pokemon Team informing a Pokemon that not exists in field fourthPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'fourthPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct007_patch_pokemon_team
  Scenario: [CT_007] - Update Pokemon Team informing a Pokemon that not exists in field fifthPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'fifthPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct008_patch_pokemon_team
  Scenario: [CT_008] - Update Pokemon Team informing a Pokemon that not exists in field lastPokemon
    Given I perform a PATCH request for 'team/' informing a Pokemon that not exists in field 'lastPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'

  @ct009_patch_pokemon_team
  Scenario: [CT_009] - Get a Pokemon Team informing nothing in the path
    Given I inform a teamName in the request 'PATCH' 'team/' informing nothing in the path
    Then Verify if the status code is 405
