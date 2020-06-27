import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/postAction'

class Ecommerce extends Component {
    componentDidMount(){
        this.props.fetchPost()
    }
    render() {
        return (
            <div>
                <h1>Ecommerce</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {fetchPost})(Ecommerce);