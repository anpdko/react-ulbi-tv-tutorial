import React from 'react';
import PostItem from "../PostItem/PostItem";
import {
   CSSTransition,
   TransitionGroup,
 } from 'react-transition-group';

const PostList = ({posts, remove}) => {
   return (
      <div>
         {posts.length > 0
            ?<TransitionGroup>
               {posts.map((item, index) => 
                  <CSSTransition
                     key={item.id} 
                     timeout={500}
                     classNames="post"
                  >
                     <PostItem remove={remove} post = {item}/>
                  </CSSTransition>
               )}
            </TransitionGroup>
            :<p>Постов не существует</p>
         }
      </div>
   );
};

export default PostList;