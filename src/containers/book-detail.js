import React, { Component } from 'react'
import { connect } from 'react-redux'
import { activeBook } from '../reducers/index'

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Select book to get started</div>
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
                <div><span>Number of pages: {this.props.book.pages}</span></div>
            </div>
        )
    }
}

// maps to props of BookDetail from index.js main reducer
function mapStateToProps(state) {
    return {
        book: state.activeBook //this refers to index.js reducer to ActiveBook
    }
}

export default connect(mapStateToProps)(BookDetail)