import { FC, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import requestsApi from "../../api/requestsApi";
import { Category } from "../../models/Enums";
import "./navbar-search.scss";

const Search: FC = () => {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getSearchedMovies = async () => {
      const params = { query: search };
      const response = await requestsApi.getSearch(Category.Movie, { params });

      console.log(response.data.results);
    };

    if (search) {
      getSearchedMovies();
    }
  }, [search]);

  return (
    <div className="navbar-search">
      <input
        type="text"
        placeholder="search movies..."
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        onChange={(event) => setSearch(event.target.value)}
      />

      {showResults && (
        <div className="navbar-search__results">
          <div className="navbar-search__results__item">
            <div className="navbar-search__results__item__image">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                alt="item"
              />
            </div>

            <div className="navbar-search__results__item__title">
              <h3>movie name title</h3>
            </div>

            <div className="navbar-search__results__item__action">
              <Button className="px-3" variant="info">
                Watch
              </Button>
            </div>
          </div>
          <div className="navbar-search__results__item">
            <div className="navbar-search__results__item__image">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                alt="item"
              />
            </div>

            <div className="navbar-search__results__item__title">
              <h3>movie name title</h3>
            </div>

            <div className="navbar-search__results__item__action">
              <Button className="px-3" variant="info">
                Watch
              </Button>
            </div>
          </div>
          <div className="navbar-search__results__item">
            <div className="navbar-search__results__item__image">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                alt="item"
              />
            </div>

            <div className="navbar-search__results__item__title">
              <h3>movie name title</h3>
            </div>

            <div className="navbar-search__results__item__action">
              <Button className="px-3" variant="info">
                Watch
              </Button>
            </div>
          </div>
          <div className="navbar-search__results__item">
            <div className="navbar-search__results__item__image">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
                alt="item"
              />
            </div>

            <div className="navbar-search__results__item__title">
              <h3>movie name title</h3>
            </div>

            <div className="navbar-search__results__item__action">
              <Button className="px-3" variant="info">
                Watch
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
