import PostAuthor from './PostAuthor.js'
import TimeAgo from "./TimeAgo.js";
import ReactionButtons from "./ReactionButtons.js";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice.js';

// let PostsExcerpt = ({ post }) => {
    let PostsExcerpt = ({ postId }) => {
        const post = useSelector(state => selectPostById(state, postId))

    return (
        <article>
            <h3>{post.title}</h3>
            <p className='excerpt'>{post.body.substring(0,75)}...</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostsExcerpt