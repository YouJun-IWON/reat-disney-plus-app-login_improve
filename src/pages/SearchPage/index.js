import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {
  //! Select the target to search
  const [searchResults, setSearchResults] = useState([]);

  //! http://localhost:3001/search?q=spider =>
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const navigate = useNavigate();

  // ?q=spiderman =>
  let query = useQuery();
  // spiderman
  const searchTerm = query.get('q');

  //! Insert the 'Debounce' effect.
  const deboundedSearchTerm = useDebounce(searchTerm, 500);


  // Run the search when the data passed through the 'Debounce' changes.
  useEffect(() => {
    if (deboundedSearchTerm) {
      fetchSearchMovie(deboundedSearchTerm);
    }
  }, [deboundedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  //! Set different screen according to the search results
  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                {/* If you select one of the movies from the search results, you will move to the screen according to the ID value of the movie. */}
                <div
                  className='movie__column-poster'
                  onClick={() => navigate(`/${movie.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt={movie.original_title}
                    className='movie__poster'
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className='no-results'>
        <div className='no-results__text'>
          <p>not found : "{searchTerm}"</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
