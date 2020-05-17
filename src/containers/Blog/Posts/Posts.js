import React, { Component } from "react";
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // console.log(this.props);
        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,8);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'SK'
                }
            })
            this.setState({
                posts: updatedPosts
            });
            // console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    postClickHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    };

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                <Link to = {"/" + post.id} key = {post.id}>
                    <Post
                        title = {post.title} 
                        author = {post.author}
                        clicked = {() => {this.postClickHandler(post.id)}}>
                    </Post>
                </Link>
            );
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        )
    }
};

export default Posts;