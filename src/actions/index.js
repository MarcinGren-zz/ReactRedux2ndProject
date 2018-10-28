export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action, an obj with a type property
    console.log('in action book is ', book)
    return {
        // require type, usualy come with payload(also naming payload payload is a convention not requirement)
        type: 'BOOK_SELECTED',
        payload: book
    }
}