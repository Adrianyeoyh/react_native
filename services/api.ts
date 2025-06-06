export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzYxYTk4YWY3YjI2NTRjM2YwYTE2NzZjZjg0MWYzNyIsIm5iZiI6MTc0ODY3MDU1NS4zMzcsInN1YiI6IjY4M2E5ODViYjMwMzA2ZjY1N2YyYWExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eytRLv30XkuvnZo-4kDFpthgC3SsO1A7hlNvj_C4IE0'
    }
}

export const fetchMovies = async({ query } : {query: string} ) => {
  const endpoint = query
  ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  // console.log(TMDB_CONFIG.headers)

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();

  return data.results;
};
