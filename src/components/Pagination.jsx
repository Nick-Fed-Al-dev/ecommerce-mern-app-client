import { PaginationItem } from "./PaginationItem"


export const Pagination = ({products}) => {
  let count = []
  for (let i = 1; i <= products.length; i++) {
    count.push(i)
  }
  count.length = Math.ceil(count.length / 10)
  const paginationMarkdown = count.map((v, i) => <PaginationItem key={i} index={i} />)
  
  return (
    <div className="pagination">
      {paginationMarkdown}
    </div>
  )
}
