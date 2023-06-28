import classNames from 'classnames';
import './Pagination.scss';

interface PaginationProps {
  total: number[];
  currentPage: number;
  lastPage: number;
  onHandlePrevPage: () => void;
  onHandleNextPage: () => void;
  onHandleChangePage: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { total, currentPage, lastPage, onHandlePrevPage, onHandleNextPage, onHandleChangePage } =
    props;

  return (
    <div>
      {total.length > 1 && (
        <ul className='pagination__list'>
          <li className='pagination__list-item pagination__list-prev'>
            <button
              className={classNames('pagination__list-link', {
                disabled: currentPage === 1,
              })}
              onClick={onHandlePrevPage}
            >
              <svg
                className='pagination__list-img--prev'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='pagination__list-img--prev--disabled'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </li>
          {total.map((page) => (
            <li className='pagination__list-item' key={page}>
              <button
                className={classNames('pagination__list-link', {
                  'pagination__list-link--is-current': currentPage === page,
                })}
                onClick={() => onHandleChangePage(page)}
              >
                {page}
              </button>
            </li>
          ))}
          <li className='pagination__list-item pagination__list-next'>
            <button
              className={classNames('pagination__list-link', {
                disabled: currentPage === lastPage,
              })}
              onClick={onHandleNextPage}
            >
              <svg
                className='pagination__list-img--next'
                width='16'
                height='16'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='pagination__list-img--next--disabled '
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};
