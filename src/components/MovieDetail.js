import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ id, title, summary, genres, year }) {
  const MAX_LENGTH = 150;
  const summaryTrimmed = summary.substr(0, MAX_LENGTH); // 250자까지 자름
  const summaryLastIndex = summary.substr(0, MAX_LENGTH).lastIndexOf(" "); // 마지막 띄어쓰기 위치까지 자른 수
  const summaryTrimmedIndex = summaryTrimmed.substr(0, summaryLastIndex);
  const renderGenres = genres.map((genre) => (
    <span className={styles.hashtag} key={genre}>
      #{genre}
    </span>
  ));
  return (
    <div className={styles.movie__detail}>
      <Link to={`/movie/${id}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div>{year}</div>
      <div className={styles.hashtags}>{renderGenres}</div>
      <p className={styles.summary}>
        {summary.length > MAX_LENGTH ? `${summaryTrimmedIndex}...` : summary}
      </p>
    </div>
  );
}

MovieDetail.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  year: propTypes.number.isRequired,
};

export default MovieDetail;
