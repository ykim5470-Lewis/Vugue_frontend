import React from "react"
import styled from "styled-components"

const NavWrap = styled.nav`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
`

const DetailPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = Array(Math.ceil(totalPosts / postsPerPage))
    .fill(null)
    .map((e, i) => i + 1)

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

export default DetailPagination
