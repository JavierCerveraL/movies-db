import React, { useEffect, useState } from 'react';
import './home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=19d6f64c59f56d82642123b436a483ee&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={5}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="/"
                />
              </div>
              <div className="posterImage__overlay ">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ''}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ''}
                  <span className="posterImage_rating ps-5">
                    {movie ? movie.vote_average : ''}
                    <i class="fa-solid fa-star"></i>
                    {''}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ''}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
