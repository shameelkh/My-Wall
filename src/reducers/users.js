let nextId = 2;

let defaultUsers = [
    {
        id: 1,
        username: 'Shameel'
    }
]

const users = (state = defaultUsers, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state,
                {
                    id: nextId++,
                    username: action.username
                }
            ]
        default:
            return state
    }
}

export default users;