import styled from "styled-components"
import Link from "next/link"
import { Category } from "../../styles/Common"

const CategoryHeader = (props) => {
  let { title, id } = props
  const subCategoryList = Category[id - 1].subCategory
  title = title.toLowerCase()
  title = title.replace(/^./, title[0].toUpperCase())
  return (
    <>
      <CategoryTitle>{title}</CategoryTitle>
      <SubCategoryWrap>
        {subCategoryList.map((curr, i) => {
          return (
            <Link
              href={`/category/[id]/[tag]`}
              as={`/category/${title}${id}/${curr.id}`}
            >
              <a>
                <SubCategoryTitle>{curr.title}</SubCategoryTitle>
              </a>
            </Link>
          )
        })}
      </SubCategoryWrap>
    </>
  )
}

const CategoryTitle = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  padding: 30px;
`
const SubCategoryTitle = styled.span`
  font-size: 18px;
  color: #333333;
  margin: 10px 20px;
  font-weight: 600;
  &:hover {
    color: red;
  }
`
const SubCategoryWrap = styled.div`
  margin: 20px;
`
export default CategoryHeader
