import { useSelector } from "react-redux";
// import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice.js";
import { selectPostByIds, getPostsStatus, getPostsError, useGetPostsQuery } from "./postsSlice.js";
import PostsExcerpt from "./PostsExcerpt.js";


const PostsList = () => {
    // const dispatch = useDispatch()
    const {isLoading, isSuccess, isError, error} =useGetPostsQuery()
    // const posts = useSelector(selectAllPosts)
    const orderedPostIds = useSelector(selectPostByIds)
    
    
    
    let content;
    if (isLoading){
        content = <p>"Loading..."</p>
    }else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
        // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        // content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    }else if (isError) {
        content = <p>{error}</p>
    }

    
    return (
        <section>
            <h2>Post</h2>
            {content}
        </section>
    )
}
export default PostsList