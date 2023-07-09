import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🎬 TOP 10 MOVIES</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div className={styles.swiperContainer}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {movies.map((movie) => (
              <SwiperSlide>
                <div className={styles.swiperItems}>
                  <Movies
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    coverImg={movie.medium_cover_image}
                  />
                  <MovieDetail
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                    year={movie.year}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

export default Home;
