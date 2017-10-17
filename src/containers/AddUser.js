import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({dispatch}) => {
    let username = ''

    let onSubmit = (e) => {
        e.preventDefault()
        dispatch( addUser(username.value) )
        username.value = ''
    }

    return (
        <form onSubmit={onSubmit}>
            Username: <input
                type="text"
                ref={ (input) =>
                    {username = input}
                }
            />
            <input type="submit" value="Add User"/>

        </form>
    )
}

AddUser = connect()(AddUser)

export default AddUser