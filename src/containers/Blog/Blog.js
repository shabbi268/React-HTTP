import React, { Component } from 'react';
import Posts from '../../containers/Blog/Posts/Posts'; 
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component { 
    render () {
        return (
            <div>
                <header className = "Blog">
                    <nav>
                        <ul>
                            <li><NavLink to = "/" exact >Home</NavLink></li>
                            <li><NavLink to = {{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" exact render = {() => <h1>Home</h1>}></Route> */}
                <Route path = "/" exact component = {Posts}></Route>
                <Route path = "/new-post" exact component = {NewPost}></Route>
            </div>
        );
    }
}

export default Blog;