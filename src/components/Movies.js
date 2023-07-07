import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ id, coverImg, title, summary, genres }) {
  const renderGenres = genres.map((genre) => <span key={genre}>#{genre}</span>);
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <div>{renderGenres}</div>
    </div>
  );
}

Movies.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movies;
