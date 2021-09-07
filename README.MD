# Overview

Automation project for projetc
[PokemonTeam](https://github.com/LucasManciniDaSilva/PokemonTeam) using Cypress,
Cucumber and Allure.

## Stack

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[Allure](https://docs.qameta.io/allure/)

[Cucumber](https://cucumber.io/)

[Cucumber Pre-Processor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)

[Prettier](https://prettier.io/)

[Cypress Allure Plugin](https://github.com/Shelex/cypress-allure-plugin-example)

## Execute tests by the cypress UI

To run the tests cases by cypress UI it's necessary to run the command:

`npm run cy:open`

## Execute tests in the terminal

To run the tests cases in the terminal it's necessary to run the command:

`npm run cy:run`

## Execute tests and vefity allure reports

To run the tests cases and generate a report for allure, it's necessary to run
the command:

`npm run cy:allure`

After running the tests case, will be generated a report in the folder
allure-cypress-pokemon-team. To run the allure project it's necessary to run the
command:

`allure open allure-cypress-pokemon-team `

## Project Structure

The project has structure like this:

```
\cypress
    \files
    \fixtures
    \integration
        \common
        \cucumber-test
            \nameOfAnExistingFeature
             Ex: test.feature it would have a folder named 'test' with a file named testSteps.js
    \plugins
    \screenshots
    \support
```