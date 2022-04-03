import { Pagination } from "react-bootstrap";

const Paginate = ({ prev, next, handlePage }) => {
  const nextUrl = () => {
    const [, page] = next.split("?");
    console.log(page);
    handlePage(page);
  };
  const prevUrl = () => {
    const [, page] = prev.split("?");
    handlePage(page);
  };
  return (
    <Pagination size="lg" className="pag-btn">
      {prev && (
        <Pagination.Prev className={"paginationItemStyle"} onClick={prevUrl} />
      )}
      {next && (
        <Pagination.Next className={"paginationItemStyle"} onClick={nextUrl} />
      )}
    </Pagination>
  );
};
export default Paginate;
