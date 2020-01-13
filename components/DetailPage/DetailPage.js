// import React, { useState, useEffect } from "react"
// import El from "./El"
// // import axios from "axios"
// // import DetailPagination from "./DetailPagination"

// const DetailPage = (props) => {
//   // console.log(props, "here!")
//   const DataArray1 = props.DataArray
//   console.log(DataArray1)
//   // const [DataArray] = useState({ DataArray })
//   //Basically same function with state = {posts: []}, but no more need to use setState later.
//   // const [loading, setLoading] = useState(false)
//   //We use laoding since we will gonna get data from the api. If the loading is on process, it will gonna be false in default
//   // const [currentPage, setCurrentPage] = useState(1)
//   //Pagination for the default is 1, the main page starts from 1
//   // const [postsPerPage] = useState(3)
//   //The number of posts that I wanna list on the each pages

//   // useEffect(() => {
//   //   const fetchPosts = async () => {
//   //     setLoading(true)
//   //     const res = await axios.get("http://localhost:3000/data/data.json")
//   //     setLoading(false)
//   //   }
//   //   fetchPosts()
//   // }, [])

//   //6은 PracticePagination에서 props로 줄 것! 이 것이 postsPerPage 값이 겠지?
//   //indexOfLastPost는 [0,1,2,3,4,5,6,7,8] 중에 [0,1,2,] 즉, 3개가 나왔고 indexOfFirstPost는 [0,1,2,3,4,5,6,7,8]에서 9를 빼니 0이다.
//   // slice(0,3)하니 [0,1,2]이렇게만 나온다. 그럼, [0,1,2,3,4,5,6,7,8]에서 [0,1,2]를 뺀 값을 나오게 하려면?? slice(3,9)를 한다.
//   //3은 여기서 indexOfLastPost이고 9는 postsPerPage이니까
//   //PropsValue = postsPerPage - indexOfLastPost겠다!!!
//   //배열에서 [3,4,5,6,7,8]을 나오게 하기 위해서는 posts.slice(indexOfLastPost,postsPerPage)를 props로 넘겨야 한다.

//   //Get current El
//   // const indexOfLastPost = currentPage * postsPerPage
//   // const indexOfFirstPost = indexOfLastPost - postsPerPage
//   // console.log("DataArray", DataArray)
//   // const currentPosts = DataArray.slice(indexOfFirstPost, indexOfLastPost)
//   // console.log(currentPosts)

//   //Change page
//   // const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   return (
//     <div>
//       <El posts={DataArray1} />
//       {/* <DetailPagination
//         postsPerPage={postsPerPage}
//         totalPosts={DataArray.length}
//         paginate={paginate}
//         DataArray={DataArray}
//       /> */}
//     </div>
//   )
// }

// export default DetailPage
