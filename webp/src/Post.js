import React, { useEffect, useState } from 'react';
import './Post.css';
import $ from "jquery";
import { Avatar } from '@mui/material';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "./Imageupload.css"

function Post({postId, username, caption, imageUrl, name}) {  //props
  // const [comments, setComments] = useState([]);   //留言串
  const [comment, setComment] = useState('');   //小留言
  const [like, setLike] = useState ("/images/unlike.png");

  // useEffect(() => {
  //   let unsubscribe;
  //   if (postId) {
  //     unsubscribe = db
  //       .collection("posts")
  //       .doc(postId)
  //       .collection("comments")
  //       .orderBy('timestamp', 'desc')
  //       .onSnapshot((snapshot) => {
  //         setComments(snapshot.docs.map((doc => doc.data())))
  //       });
  //   }

  //   return () => {
  //     this?.unsubscribe();
  //   };
  // }, [postId]);

  // const postComment2 = () => {
    // event.preventDefault();

    // db.collection("posts").doc(postId).collection("comments").add({
    //   text: comment, username: user.displayName,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp()
    // })
    // setComment('');
  // }

  function likeChange() {
    if (like === "/images/unlike.png")
      setLike("/images/like.png")
    else
      setLike("/images/unlike.png")
  }


  function postComment() {
    $("#comment").append(`<strong>${name} </strong>`, `<span> ${comment}</span><br/>`);
    setComment("");
  }

  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar className='post__avatar'
                    alt = {username}
                    src="/static/images/avatar/1.jpg">
            </Avatar>
            <h3>{username}</h3>
        </div>
        {/* header -> avatar + username */}

        <img className='post__image' src={imageUrl} />
        {/* image */}

        <h4 className='post__text'><strong>{username} </strong>{caption}</h4>
        {/* username + caption */}

        <div className='post__comments'>
          <img  className='like' src={like} onClick={likeChange} /><br/>

          {/* {comments.map((comment) => ( */}
            <p id='comment' style={{marginLeft:"20px"}}>
              {/* <strong>{comment.username}</strong> {comment.text} */}
            </p>
          {/* ))} */}
        </div>
        
        <form className='post__commentBox'>
          <input
            className='post__input' placeholder='留言...' value={comment}
            onChange={(e) => setComment(e.target.value)}>
          </input>
          <p className='post__button' onClick={postComment}>Post</p>
        </form>
    </div>
  )
}

export default Post