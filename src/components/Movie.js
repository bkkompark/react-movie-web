import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({
  id,
  coverImg,
  title,
  rating,
  year,
  genres,
  like,
  download,
  url,
  description,
}) {
  const renderGenres = genres.map((genre) => <span key={genre}>#{genre}</span>);
  return (
    <div>
      <img src={coverImg} alt={title} />
      <Link to={url}>
        <h2>{title}</h2>
      </Link>
      <div>{year}</div>
      <div>{renderGenres}</div>
      <div>{rating}/10</div>
      <div>🖤 {like}</div>
      <div>
        {download >= 1000
          ? (download / 1000).toFixed(0) + "K"
          : download.toFixed(1)}{" "}
        downloaded
      </div>
      <p>{description}</p>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  like: propTypes.number.isRequired,
  download: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;
