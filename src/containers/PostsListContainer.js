import { connect } from 'react-redux'
import PostsList from '../components/PostsList'
import { deletePost } from '../actions'


const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (postId) => {
            dispatch( deletePost(postId) )
        }
    }
}

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostsListContainer