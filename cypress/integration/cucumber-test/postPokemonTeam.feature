Feature: Tests POST Pokemon Team

  @ct001_post_pokemon_team
  Scenario: [CT_001] - Create a new Pokemon Team
    Given I perform a POST request for 'team' to create a new Pokemon team
    When Verify if teamName returning in response header is equal to informed in the request
    Then Verify if the status code is 201


  @ct002_post_pokemon_team
  Scenario: [CT_002] - Create a new Pokemon Team informing a teamName that already exists
    Given I perform a POST request for 'team' informing a teamName that already exists
    Then Verify if returning the message 'Team Already Exists' and response code '422.003'



  @ct003_post_pokemon_team
  Scenario: [CT_003] - Create a new Pokemon Team informing a Pokemon that not exists in field firstPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'firstPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct004_post_pokemon_team
  Scenario: [CT_004] - Create a new Pokemon Team informing a Pokemon that not exists in field secondPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'secondPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct005_post_pokemon_team
  Scenario: [CT_005] - Create a new Pokemon Team informing a Pokemon that not exists in field thirdPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'thirdPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct006_post_pokemon_team
  Scenario: [CT_006] - Create a new Pokemon Team informing a Pokemon that not exists in field fourthPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'fourthPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct007_post_pokemon_team
  Scenario: [CT_007] - Create a new Pokemon Team informing a Pokemon that not exists in field fifthPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'fifthPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct008_post_pokemon_team
  Scenario: [CT_008] - Create a new Pokemon Team informing a Pokemon that not exists in field lastPokemon
    Given I perform a POST request for 'team' informing a Pokemon that not exists in field 'lastPokemon'
    Then Verify if returning the message 'Pokemon Not Found. Check your team.' and response code '404.002'



  @ct009post_pokemon_team
  Scenario: [CT_009] - Create a new Pokemon Team not informing the field teamName
    Given I perform a POST request for 'team' not informing the field 'teamName'
    Then Verify if returning the message "Field 'teamName' cannot be null" and response code '400.001'



  @ct010_post_pokemon_team
  Scenario: [CT_010] - Create a new Pokemon Team not informing the field firstPokemon
    Given I perform a POST request for 'team' not informing the field 'firstPokemon'
    Then Verify if returning the message "Field 'firstPokemon' cannot be null" and response code '400.001'



  @ct011_post_pokemon_team
  Scenario: [CT_011] - Create a new Pokemon Team not informing the field secondPokemon
    Given I perform a POST request for 'team' not informing the field 'secondPokemon'
    Then Verify if returning the message "Field 'secondPokemon' cannot be null" and response code '400.001'



  @ct012_post_pokemon_team
  Scenario: [CT_012] - Create a new Pokemon Team not informing the field thirdPokemon
    Given I perform a POST request for 'team' not informing the field 'thirdPokemon'
    Then Verify if returning the message "Field 'thirdPokemon' cannot be null" and response code '400.001'



  @ct013_post_pokemon_team
  Scenario: [CT_013] - Create a new Pokemon Team not informing the field fourthPokemon
    Given I perform a POST request for 'team' not informing the field 'fourthPokemon'
    Then Verify if returning the message "Field 'fourthPokemon' cannot be null" and response code '400.001'



  @ct014_post_pokemon_team
  Scenario: [CT_014] - Create a new Pokemon Team not informing the field fifthPokemon
    Given I perform a POST request for 'team' not informing the field 'fifthPokemon'
    Then Verify if returning the message "Field 'fifthPokemon' cannot be null" and response code '400.001'



  @ct015_post_pokemon_team
  Scenario: [CT_015] - Create a new Pokemon Team not informing the field lastPokemon
    Given I perform a POST request for 'team' not informing the field 'lastPokemon'
    Then Verify if returning the message "Field 'lastPokemon' cannot be null" and response code '400.001'




