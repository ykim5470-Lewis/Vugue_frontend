// import React, { useState, useEffect } from "react"
// import Posts from "./Posts"
// // import axios from "axios"
// // import Pagination from "./Pagination"

// const PracticePagination = (props) => {
//   const ArticleMoreView = props.CommerceArray
//   // const [posts, setPosts] = useState([])
//   //Basically same function with state = {posts: []}, but no more need to use setState later.
//   // const [loading, setLoading] = useState(false)
//   //We use laoding since we will gonna get data from the api. If the loading is on process, it will gonna be false in default
//   // const [currentPage, setCurrentPage] = useState(1)
//   //Pagination for the default is 1, the main page starts from 1
//   // const [postsPerPage] = useState(9)
//   //The number of posts that I wanna list on the each pages

//   // useEffect(() => {
//   //   const fetchPosts = async () => {
//   //     setLoading(true)
//   //     const res = await axios.get("http://localhost:3000/data/data.json")
//   //     setPosts(res.data.data)
//   //     setLoading(false)
//   //   }
//   //   fetchPosts()
//   // }, [])
//   // console.log(posts)

//   //일단 9개를 받아서, 3개를 빼고 6개를 넣어야 하는데..... 일단 9개를 받고 그게 postsPerPage가 되겠지? indexOfLastPost는 9가 되는 것이 맞지
//   //9은 postsPerPage * currentPage이고 바뀌어야 하는 것은 indexOfFristPost인데 여기보면 3은 그냥 3넣자.
//   //3을 그냥 넣으면 안 되지....
//   // const ArticlePosts = 3

//   //Get current Posts
//   // const indexOfLastPost = currentPage * postsPerPage
//   // const indexOfFirstPost = indexOfLastPost - postsPerPage + ArticlePosts
//   // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

//   //Change page
//   // const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div className="container">
//       <Posts posts={ArticleMoreView} />
//       {/* <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       /> */}
//     </div>
//   )
// }

// export default PracticePagination
