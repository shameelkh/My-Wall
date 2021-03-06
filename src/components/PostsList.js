import React from 'react'
import Post from './Post'

let PostsList = ({posts, users, onDelete}) => {

    let findUser = (post) => {
        let userFound = users.filter(user => {
            return user.id == post.userId
        })[0]

        return userFound
    }

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <Post post={post} user={findUser(post)} onDelete={onDelete} />
                ))}
            </ul>

        </div>
    )
}

export default PostsList