import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

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
    <strong>loading..</strong>
  ) : (
    <Movie
      id={movie.id}
      coverImg={movie.large_cover_image}
      title={movie.title}
      rating={movie.rating}
      year={movie.year}
      genres={movie.genres}
      like={movie.like_count}
      download={movie.download_count}
      description={movie.description_full}
      url={movie.url}
    />
  );
}

export default Detail;
