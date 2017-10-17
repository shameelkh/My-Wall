let nextId = 4;

let defaultPosts = [
    {
        id: 1,
        message: 'post 1',
        userId: 1
    },
    {
        id: 2,
        message: 'post 2',
        userId: 1
    },
    {
        id: 3,
        message: 'post 3',
        userId: 1
    }
]

const posts = (state = defaultPosts, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state,
                {
                    id: nextId++,
                    message: action.message,
                    userId: action.userId
                }
            ]

        case 'DELETE_POST':
            return state.filter((post) => {
                return post.id !== action.postId
            })

        default:
            return state
    }
}

export default posts;