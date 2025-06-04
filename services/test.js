// const person = {name : 'adrian', //key: value
//     age : 16,
//     last_name : 'yeo'
// };

// // const {name, age, last_name} = person; // assigns
// const { name: firstName } = person; // assigning key: alias 

// person.name = 'darren';

// // const { name: secondName} = person; //stores memory and not directed
// // console.log( firstName );
// // console.log(secondName);


// let val = 1;
// val++;
// console.log(val);

// export const TMDB_CONFIG = {
//     BASE_URL: 'https://api.themoviedb.org/3',
//     API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
//         // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzYxYTk4YWY3YjI2NTRjM2YwYTE2NzZjZjg0MWYzNyIsIm5iZiI6MTc0ODY3MDU1NS4zMzcsInN1YiI6IjY4M2E5ODViYjMwMzA2ZjY1N2YyYWExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eytRLv30XkuvnZo-4kDFpthgC3SsO1A7hlNvj_C4IE0'
//     }
// }

// export const fetchMovies = async({ query } : {query: string} ) => {
//     const endpoint =  query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` //comparison statement
//         : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

//     const response = await fetch(endpoint, {
//         method: 'GET',
//         headers: TMDB_CONFIG.headers,
//     });

//     if (!response.ok) {
//         // @ts-ignore
//         throw new Error ('Failed to fetch movies', response.statusText);
//     }

//     const data = await response.json();
//     return data.results;
// }


const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const url2 = 'https://api.themoviedb.org/3/search/movie?query=""'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzYxYTk4YWY3YjI2NTRjM2YwYTE2NzZjZjg0MWYzNyIsIm5iZiI6MTc0ODY3MDU1NS4zMzcsInN1YiI6IjY4M2E5ODViYjMwMzA2ZjY1N2YyYWExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eytRLv30XkuvnZo-4kDFpthgC3SsO1A7hlNvj_C4IE0'
  }
};

// fetch(url2, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));


fetch(url2, options)
  .then(res => {return res.json()})
  .then(data => {return data.results})
  .catch(err => console.error(err));


export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        // Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzYxYTk4YWY3YjI2NTRjM2YwYTE2NzZjZjg0MWYzNyIsIm5iZiI6MTc0ODY3MDU1NS4zMzcsInN1YiI6IjY4M2E5ODViYjMwMzA2ZjY1N2YyYWExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eytRLv30XkuvnZo-4kDFpthgC3SsO1A7hlNvj_C4IE0'
    }
}


export const fetchMovies1 = async(query) => {
    const endpoint =  query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` //comparison statement
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    console.log('TMDB ➜', response.status, response.statusText);

    if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    return data.results;
}

fetchMovies1('');