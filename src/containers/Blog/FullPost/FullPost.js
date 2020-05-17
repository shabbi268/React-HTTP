import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    deletePostHandler = (id) => {
        axios.delete('/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response);
        });
    };

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if(this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    loadedPost: response.data
                });
                // console.log(response);
            });
            }
        }
    }

    render () {
        let post = <p style = {{textAlign: "center"}}>Please select a Post!</p>;
        if(this.props.match.params.id) {
            post = ( <div style = {{textAlign: "center"}} >Loading...</div> )
        }
            if(this.state.loadedPost) {
                post = (
                    <div className="FullPost">
                        <h1>{this.state.loadedPost.title}</h1>
                        <p>{this.state.loadedPost.body}</p>
                        <div className="Edit">
                            <button onClick = {() => this.deletePostHandler(this.state.loadedPost.id)} className="Delete">Delete</button>
                        </div>
                    </div>
                );
            }
        return post;
    }
}

export default FullPost;