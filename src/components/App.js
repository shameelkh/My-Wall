import React from 'react';
import PostsListContainer from '../containers/PostsListContainer'
import AddUser from '../containers/AddUser'
import AddPost from '../containers/AddPost'
let posts = [
    {
        message: 'hello'
    },
    {
        message: 'bye'
    }

]
const App = () => {
    return (
        <div>
            <PostsListContainer />
            <br />

            <AddPost />

            <br />
            <AddUser />
        </div>
    )
}

export default App

