import { ContextAuth } from 'hooks/useAuth'
import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'
import { PhotoCommentsForm } from '../PhotoCommentsForm'

import { CommentItemContainer, CommentListContainer, Container } from './styles'

export function PhotoComments({ id, comments : comments_ }) {
    const { user } = useContext(ContextAuth)
    const commentSection = useRef()
    const [comments, setComments] = useState([])

    useEffect(() => {
        setComments(comments_)
    }, [])
    
    
    function handleAddComment(data) {
        setComments(oldState=>[...oldState,data])
    }

    
    useEffect(() => {
        commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }, [comments])

    

return (
    <Container>
        <CommentListContainer ref={commentSection}>
            { comments.map(comment => (<CommentItemContainer >
                <b>{comment.comment_author}:</b>
                <span>{comment.comment_content}</span>
            </CommentItemContainer>))}
        </CommentListContainer>
        {user ? <PhotoCommentsForm user={user} handleAddComment={handleAddComment} /> : null}
    </Container>
)
}