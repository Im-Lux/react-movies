import { FC, useEffect, useRef, useState } from "react";
import "./movie-grid.scss";
import years from "../../data/years";
import { Button } from "react-bootstrap";
import { Movie } from "../../models/Movie";
import requestsApi from "../../api/requestsApi";
import { Category, MovieType } from "../../models/Enums";
import MovieListItem from "./MovieListItem";

const MovieGrid: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const yearRef = useRef<HTMLSelectElement>(null);
  const adultRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const getMovies = async () => {
      const params = {};
      const response = await requestsApi.getMovies(MovieType.TopRated, {
        params,
      });

      setMovies(response.data.results.slice(0, 20));
    };

    getMovies();
  }, []);

  const searchFilteredHandler = () => {
    const year = yearRef.current?.value;
    const includeAdult = adultRef.current?.checked;

    const getMovies = async () => {
      const params = {
        year: +year!,
        include_adult: includeAdult,
      };
      const response = await requestsApi.getDiscover(Category.Movie, {
        params,
      });

      setMovies(response.data.results.slice(0, 20));
    };

    getMovies();
  };

  return (
    <div className="grid">
      <div className="grid__header">
        <h2>Want To Find Something Specific?</h2>
        <div className="grid__header__filter">
          <div className="grid__header__filter__year">
            <label htmlFor="year">Year : </label>
            <select ref={yearRef} id="year">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid__header__filter__adult">
            <input ref={adultRef} type="checkbox" id="adult" />
            <label htmlFor="adult">Include Adult Movies</label>
          </div>

          <div className="grid__header__filter__action">
            <Button
              className="btn-primary px-4"
              variant="warning"
              onClick={searchFilteredHandler}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="grid__container">
        {movies.map((movie, index) => (
          <MovieListItem key={index} movie={movie} category={Category.Movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
