import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return loading ? (
    <div className={styles.divLoading}>
      <strong className={styles.loading}>loading..</strong>
    </div>
  ) : (
    <Movie
      coverImg={movie.medium_cover_image}
      title={movie.title}
      rating={movie.rating}
      like={movie.like_count}
      download={movie.download_count}
      url={movie.url}
      description={movie.description_full}
    />
  );
}

export default Detail;
