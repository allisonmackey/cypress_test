describe('My First Test Block', () => {
	it('Does not do much!', () => {
		expect(true).to.equal(true)
	})

	it('Visits the Kitchen Sink', () => {
		cy.visit('https://example.cypress.io')
	})



})