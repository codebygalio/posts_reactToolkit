import { useSelector } from "react-redux";
// import { selectAllPosts } from "./postsSlice";
// import { selectAllUsers } from "../users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({userId}) => {
    const users = useSelector(state => state.users)

    const author = users.find(user => user.id === userId)
    
    return (<span>by {author? 
    <Link to={`/user/${userId}}`}>{author.name}</Link>
     : 'Unknown author'}</span>)
}

export default PostAuthor