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

