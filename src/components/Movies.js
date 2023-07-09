import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ id, coverImg, title }) {
  return (
    <div className={styles.container}>
      <Link to={`/movie/${id}`}>
        <img className={styles.movie__img} src={coverImg} alt={title} />
      </Link>
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
