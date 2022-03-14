import { Pagination } from "react-bootstrap";

const Paginate = ({ next, prev, handlePage }) => {
  const nextUrl = () => {
    const [, url] = next.split("?");
    console.log(url);
    handlePage(url);
  };
  const prevUrl = () => {
    const [, url] = prev.split("?");
    handlePage(url);
  };
  return (
    <Pagination>
      {prev && <Pagination.Prev onClick={prevUrl} />}
      {next && <Pagination.Next onClick={nextUrl} />}
    </Pagination>
  );
};

export default Paginate;
