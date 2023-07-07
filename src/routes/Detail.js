import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const renderGenres = genres.map((genre) => <div key={genre}># {genre}</div>);
  // const renderRating = Array.from(
  //   { length: Math.floor(rating) },
  //   (_, index) => <span key={index}>⭐️</span>
  // );
  return (
    <div>
      <img src={coverImg} alt={title} />
      <a href={url}>
        <h1>{title}</h1>
      </a>
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

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
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
