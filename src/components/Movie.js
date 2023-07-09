import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ coverImg, title, rating, like, download, url, description }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.movie__title}>{title}</h2>
      <Link to={url}>
        <img className={styles.movie__img} src={coverImg} alt={title} />
      </Link>
      <div className={styles.detail__more}>
        <div>Rating {rating}/10</div>
        <div>Likes {like}</div>

        <div>
          {download >= 1000
            ? (download / 1000).toFixed(0) + "K"
            : download.toFixed(1)}{" "}
          Downloaded
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  like: propTypes.number.isRequired,
  download: propTypes.number.isRequired,
  url: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Movie;
