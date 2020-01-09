import React, { useState, useEffect } from "react"
import Posts from "./Posts"
import axios from "axios"
import Pagination from "./Pagination"

const PracticePagination = () => {
  const [posts, setPosts] = useState([])
  //Basically same function with state = {posts: []}, but no more need to use setState later.
  const [loading, setLoading] = useState(false)
  //We use laoding since we will gonna get data from the api. If the loading is on process, it will gonna be false in default
  const [currentPage, setCurrentPage] = useState(1)
  //Pagination for the default is 1, the main page starts from 1
  const [postsPerPage] = useState(6)
  //The number of posts that I wanna list on the each pages

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get("http://localhost:3000/data/data.json")
      setPosts(res.data.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  console.log(posts)

  //Get current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default PracticePagination
