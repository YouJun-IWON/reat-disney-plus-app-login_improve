import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  let { movieId } = useParams();
  // Bring the query statement data.

  const [movie, setMovie] = useState({});

  // When Movieid changes, the bring a new data.
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData(); // execution
  }, [movieId]);

  if (!movie) return null;
  return (
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt='img'
      />
    </section>
  );
};

export default DetailPage;
