import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movies.module.css";

function Movies({ id, coverImg, title, summary, genres, year }) {
  const renderGenres = genres.map((genre) => <span key={genre}>#{genre}</span>);
  const MAX_LENGTH = 250;
  const summaryTrimmed = summary.substr(0, MAX_LENGTH); // 250자까지 자름
  const summaryLastIndex = summary.substr(0, MAX_LENGTH).lastIndexOf(" "); // 마지막 띄어쓰기 위치까지 자른 수
  const summaryTrimmedIndex = summaryTrimmed.substr(0, summaryLastIndex);
  return (
    <>
      <div className={styles.container}>
        <Link to={`/movie/${id}`}>
          <img className={styles.movie__img} src={coverImg} alt={title} />
        </Link>
        {/* <h2 className={styles.movie__title}>{title}</h2> */}
      </div>
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
