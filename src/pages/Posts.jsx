import React, {useState, useEffect} from "react";
import PostFilter from "../components/PostFilter/PostFilter";
import PostForm from "../components/PostForm/PostForm";
import PostList from "../components/PostList/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagitation/Pagination";


const Posts = () => {
   const [posts, setPosts] = useState([])
   const [filter, setFilter] = useState({sort: '', query: ''})
   const [modal, setModel] = useState(false)
   const [page, setPage] = useState(1) // номер текущей сраницы
   const [pagesArray, setPagesArray] = useState([])
   const limit = 12 //Лимит постов на одной тсранице 
 
 
   // Собственый хук возвращаемый функцию запроса, загрузку и ошибку
   // fetchPosts - это написаное внутри хука useFetching (callback)
   const [fetchPosts, isPostsLoading, postsError] = useFetching(async ()=>{
     //Запрос на сервер и сохранение всех постов
     const response = await PostService.getAll(limit, page);
     setPosts(response.data)
 
     //Узначем и сохраняем общее количесиво страниц
     const totalCount = response.headers['x-total-count']
     const totalPages = getPageCount(totalCount, limit)
 
     //Массив всех страниц: [1, 2, 3, 4...]
     setPagesArray(getPagesArray(totalPages))
   }) 
 
   useEffect(()=>{
     fetchPosts()
   }, [page])
 
 
   //Сортировка
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
 
 
   // Удаление и добавление постов
   const createPost = (newPost) => {
     setPosts([...posts, newPost])
     setModel(false)
   }
   const removePost = (post) => {
     setPosts(posts.filter(p => p.id !== post.id))
   }

   return (
      <>
         <h1 className="title">Список постов</h1>
         <div className="box">
            <MyButton onClick={()=>setModel(true)}>
               Создать новый пост
            </MyButton>
            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <hr style={{margin: '20px 0'}}/>
            {postsError && 
               <h1 className="title">Произошла ошибка: {postsError}</h1>
            }
            {isPostsLoading
               ? <Loader/>
               :<PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            }

            <Pagination 
               pagesArray={pagesArray} 
               page={page} 
               setPage={setPage}
            />

            <MyModal visible={modal} setVisible={setModel}>
               <PostForm create = {createPost}/>
            </MyModal>
         </div>
      </>
   );
};

export default Posts;