import React, { Component } from 'react'
import { connect } from 'react-redux'
// react redux allows us to connect react with redux through function connect
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'
// this allows to action to flow through all the reducers

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    } 
}

// take app state as arg(contains array of books and active book)
// this instantly rerenders each time state is changed
function mapStateToProps(state) {
    // whatever is returned will show as props inside BookList
    return {
        books: state.books // index.js reducer, gets books from BookList
    }
}

// similar to mapStateToProps all returned from here will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called the result should be passed to all reducers
    return bindActionCreators( {selectBook: selectBook}, dispatch)
    // first argument is available to all containers, dispatch is kinda magic???
}

// promote BookList from component to container - needs to know about the dispatch method, selectBook,
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
// connect takes function and a component to produce a container
// container is a component thats aware of the state thats contained by redux