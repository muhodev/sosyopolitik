import ReactPaginate from 'react-paginate';

export function Pagination(props) {
  return (
    <ReactPaginate
      previousLabel={'Önceki'}
      nextLabel={'Sonraki'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      containerClassName={'pagination'}
      activeClassName={'active'}
      forcePage={props.initialPage}
      initialPage={props.initialPage}
      hrefBuilder={pageIndex => '?page=' + pageIndex}
      onPageChange={props.onPageChange}
    />
  );
}
