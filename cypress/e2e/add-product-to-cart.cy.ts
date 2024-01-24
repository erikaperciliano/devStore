describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')
    cy.contains('Add to Cart').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('Should not count duplicated products on cart', () => {
    cy.visit('http://localhost:3000')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to Cart').click()
    cy.contains('Add to Cart').click()

    cy.contains('Cart (1)').should('exist')
  })


  it('it should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('Sweatshirt')

    cy.get('a[href^="/product"]').first().click()

    cy.location('pathname').should('include', '/product')

    cy.contains('Add to Cart').click()

    cy.contains('Cart (1)').should('exist')
  })
})
