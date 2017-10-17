import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

let AddPost = ({users, handleAddPost}) => {
    let message = ''
    let selectedUserId = null;

    let onSubmit = (e) => {
        e.preventDefault()
        handleAddPost(message.value, selectedUserId.value)
        message.value = ''
        selectedUserId.value = null
    }

    return (
        <form onSubmit={onSubmit}>
            Whats on Your Mind? <br/>
            <textarea
                ref={ (input) => {
                        message = input
                }}
            />
            <br/>
            <select name="users" ref={(input) => selectedUserId = input}>
                {users.map((user) => (
                    <option value={user.id}> {user.username} </option>
                ))}
            </select>

            <button type="submit">
                Post!
            </button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddPost: (message, userId) => {
            dispatch( addPost(message, userId) );
        }
    }
}

AddPost = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPost