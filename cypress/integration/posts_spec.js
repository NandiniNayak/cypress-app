
describe('Post Resource', function () {
    it('Creating a New Post', function () {
        cy.visit('localhost:3000/posts/new')     // 1.

        cy.get('#post_title') // 2.
            .type('My First Post')   // 3.

        cy.get('#post_content')  // 4.
            .type('Hello, world!')   // 5.

        cy.get('#post_category_id').select('javascript')

        // cy.get('input[type="submit"]').click()  
        cy.get('input[value="Create Post"]').click()         //6

        cy.get('p')               // 7.
            .should('contain', 'My First Post')
    })
})

describe('Post Resource', function () {
    it('Creating a New Post', function () {
        cy.visit('localhost:3000/posts/1/edit')     // 1.

        cy.get('#post_title') // 2.
            .clear().type('Change post title')   // 3.

        cy.get('#post_content').clear()  // 4.
            .type('change post content')   // 5.

        cy.get('#post_category_id').select('javascript')

        // cy.get('input[type="submit"]').click()  
        cy.get('input[value="Update Post"]').click()         //6

        cy.get('p')               // 7.
            .should('contain', 'Change post title')
    })
})


