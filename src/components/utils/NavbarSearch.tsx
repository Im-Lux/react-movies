import { FC, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import requestsApi from "../../api/requestsApi";
import { Category } from "../../models/Enums";
import { Movie } from "../../models/Movie";
import CloseButton from "./CloseButton";
import "./navbar-search.scss";

const Search: FC = () => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigation = useNavigate();

  useEffect(() => {
    const getSearchedMovies = async () => {
      const params = { query: search };
      const response = await requestsApi.getSearch(Category.Movie, { params });

      setMovies(response.data.results.slice(0, 4));
    };

    if (search) {
      getSearchedMovies();
    }
  }, [search]);

  useEffect(() => {
    const addAnimationContainer = setTimeout(() => {
      resultsRef.current?.classList.add("active");
    }, 1);

    return () => {
      clearTimeout(addAnimationContainer);
    };
  }, [showResults]);

  return (
    <div className="navbar-search">
      <input
        type="text"
        placeholder="search movies..."
        onFocus={() => setShowResults(true)}
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />

      {showResults && (
        <div ref={resultsRef} className="navbar-search__results">
          {movies.map((movie, index) => (
            <div key={index} className="navbar-search__results__item">
              <div className="navbar-search__results__item__image">
                <img
                  src={
                    movie.backdrop_path
                      ? apiConfig.coverImage(movie.backdrop_path)
                      : apiConfig.posterImage(movie.poster_path)
                  }
                  alt={movie.title}
                />
              </div>

              <div className="navbar-search__results__item__title">
                <h3>{movie.title}</h3>
              </div>

              <div className="navbar-search__results__item__action">
                <Button
                  className="px-3"
                  variant="info"
                  onClick={() => {
                    navigation(`/discovery/movie/${movie.id}`);
                    setShowResults(false);
                    setSearch("");
                  }}
                >
                  Watch
                </Button>
              </div>
            </div>
          ))}

          <CloseButton onClick={() => setShowResults(false)} />
        </div>
      )}
    </div>
  );
};

export default Search;
