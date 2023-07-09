import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ id, coverImg, title }) {
  return (
    <>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      {/* <h2>{title}</h2> */}
      {/* <p>
        {summary.length > MAX_LENGTH ? `${summaryTrimmedIndex}...` : summary}
      </p>
      <div>{renderGenres}</div> */}
    </>
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
