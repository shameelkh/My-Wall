import React from 'react'

let Post = ({post, user, onDelete}) => {

    return (
        <li>
            <p>{post.message}</p>
            <p>Posted By: {user.username}</p>
            <button onClick={ () => {onDelete(post.id)} } >Delete</button>
        </li>
    )
}

export default Post