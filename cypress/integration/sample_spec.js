describe('My First Test Block', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(true)
	})

	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
	})

	it('Finds the content "type"', () => {
		cy.visit('https://example.cypress.io')
		cy.contains('type')
	})

	it('clicks the link "type"', () => {
		cy.visit('https://example.cypress.io')
		cy.contains('type').click()
	})


})