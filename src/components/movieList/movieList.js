/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from '../card/card.js';
import './movieList.css';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : 'popular'
      }?api_key=19d6f64c59f56d82642123b436a483ee&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="movieList ">
          {/* <h2 className="list__title">{type?.toUpperCase()}</h2> */}
          <div className="list__cards mt-3">
            {movieList.map((movie) => (
              <Card movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
