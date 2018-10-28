// all the reducers get two arguemnts: currentState and action
// reducers are only called when action occurs - so its always have actions as 2nd??
// state arg is NOT an app state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
        // default: not needed?
        //     return state
    }

    console.log('in reducer_active_books.js reducer')

    return state
}