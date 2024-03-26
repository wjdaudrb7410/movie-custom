const fetch = require("node-fetch");

const Base_url = "https://api.themoviedb.org/3/";
const lang = "ko-kr";
const url = (service_name) => {
  return Base_url + `${service_name}?language=${lang}`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGQyZDgxN2I3MmNjODFjNDg4N2E5ZDg0ZmQzODQyNSIsInN1YiI6IjY1ZjAwMjVkZTE5ZGU5MDE2NWI4NWU4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ce0eS73xY26EgEfedLTkc6B6E3o5mo1z6Mfx4xBuNns",
  },
};
export const NowPlaying = () => {
  console.log(url("movie/now_playing"));
  return fetch(url("movie/now_playing"), options).then((res) => res.json());
};
