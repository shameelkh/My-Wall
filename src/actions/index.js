
export const addPost = (message, userId) => {
    return {
        type: 'ADD_POST',
        message,
        userId
    }
}

export const deletePost = (postId) => {
    return {
        type: 'DELETE_POST',
        postId
    }
}

export const addUser = (username) => {
    return {
        type: 'ADD_USER',
        username
    }
}