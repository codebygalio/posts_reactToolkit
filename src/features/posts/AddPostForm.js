import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded, addNewPosts } from "./postsSlice.js";
import { selectAllUsers } from "../users/usersSlice.js";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent]  = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestsStatus, setAddRequestsStatus] = useState('idle')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    // const canSave =  Boolean(title) && Boolean(content) && Boolean(userId)
    const canSave =  [title, content, userId].every(Boolean) && addRequestsStatus === 'idle'

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestsStatus('pending')
                dispatch(addNewPosts({title, body: content, userId })).unwrap() 
                setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
            }catch(err){
                console.log('Failed to save the post', err)
            } finally {
                setAddRequestsStatus('idle')
            }
            
            
        }
    }


    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    return (
        <section className="addPostForm">
            <h2>Add a New Post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                    <textarea 
                        name="postContent" 
                        id="postContent" 
                        value={content}
                        onChange={onContentChanged}
                    />
                    <button  
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                    >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm