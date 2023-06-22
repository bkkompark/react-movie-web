import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // 셋업 함수 (해당 시스템에 연결하는 셋업 코드)
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []); // 컴포넌트의 모든 값을 포함한 의존성 목록
  console.log(movies);
  // 클린업 함수 반환 (해당 시스템과의 연결을 끊는 클린업 코드)
  return <div>{loading ? <strong>Loading...</strong> : null}</div>;
}

export default App;
