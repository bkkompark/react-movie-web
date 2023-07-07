import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {/* <Nav>
            <NavItem href="/top" isActive>
              Top Rated
            </NavItem>
            <NavItem href="/genres">Category</NavItem>
          </Nav> */}
          <div>
            {movies.map((movie) => (
              <>
                <Movies
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
