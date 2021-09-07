import './commands'
import '@shelex/cypress-allure-plugin'
import '@bahmutov/cy-api/support'

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state === 'failed') {
		const screenshot = `${Cypress.config('screenshotsFolder')}/${
			Cypress.spec.name
		}/${runnable.parent.title} -- ${test.title} (failed).png`
		addContext({ test }, screenshot)
	}
})
