import React from 'react';
import MyButton from '../UI/button/MyButton';

const PostItem = ({post, remove}) => {
   return (
      <div className="post">
         <div className="post__content">
            <strong>{post.id}. {post.title}</strong>
            <p>{post.body}</p>
         </div>
         <div className="post__btns">
            <MyButton onClick={()=>remove(post)}>Удалить</MyButton>
         </div>
      </div>
   );
};

export default PostItem;