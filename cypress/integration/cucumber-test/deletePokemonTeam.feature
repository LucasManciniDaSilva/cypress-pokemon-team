Feature: Tests DELETE Pokemon Team

  @ct001_delete_pokemon_team
  Scenario: [CT_001] - Delete a Pokemon Team
    Given I perform a POST request for 'team' to create a new Pokemon team
    When I inform a teamName in the path 'team/' to delete a Pokemon Team
    Then I perform a Get request for 'team/' and verify if returning the message 'Pokemon Team Not Found' and response code '404.001'


  @ct002_delete_pokemon_team
  Scenario: [CT_002] - Delete a Pokemon Team informing a team that not exists
    Given  I inform a teamName to 'DELETE' request for 'team/' that not exists
    Then Verify if returning the message 'Pokemon Team Not Found' and response code '404.001'


  @ct003_delete_pokemon_team
  Scenario: [CT_003] - Delete a Pokemon Team informing nothing in the path
    Given I inform a teamName in the request 'DELETE' 'team/' informing nothing in the path
    Then Verify if the status code is 405