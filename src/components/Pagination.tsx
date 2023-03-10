
const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="navigation_wrapper">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='javascript:' className='page-link'>
              {number}
            </a>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;