import React from 'react';

interface BeerFillterProps {
  query: string;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onQueryReset: () => void;
}

export const BeerFillter: React.FC<BeerFillterProps> = ({ query, onQueryChange, onQueryReset }) => {
  return (
    <form className='field has-addons'>
      <p className='control is-expanded has-icons-left has-icons-right'>
        <input
          data-cy='searchInput'
          type='text'
          className='input'
          placeholder='Search...'
          value={query}
          onChange={onQueryChange}
        />
        <span className='icon is-left'>
          <i className='fas fa-magnifying-glass' />
        </span>

        {query && (
          <span className='icon is-right' style={{ pointerEvents: 'all' }}>
            <button
              data-cy='clearSearchButton'
              type='button'
              className='delete'
              onClick={onQueryReset}
            />
          </span>
        )}
      </p>
    </form>
  );
};
