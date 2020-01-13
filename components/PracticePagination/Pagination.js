import React from "react"
import styled from "styled-components"

const NavWrap = styled.nav`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
`

// postsPerPage는 limit이고 totalPosts는 imtes 이고 paginate는
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <NavWrap>
      {pageNumbers.map((number) => (
        <li key={number} className="pageItem">
          <button onClick={() => paginate(number)} className="page-link">
            {number}
          </button>
        </li>
      ))}
    </NavWrap>
  )
}

export default Pagination
