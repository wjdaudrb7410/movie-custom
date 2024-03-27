const fetch = require("node-fetch");
const Service = {
  NowPlaying: "movie/now_playing",
  TopRated: "movie/top_rated",
  Popular: "movie/popular",
  Search: "search/movie?query=",
};
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
//밖에서 파라미터만 주면 알아서 조합해서 내보내기
export const FetchManager = (demand) => {};
//페이지에 따라 다르게 보이기(예정)
//lang뒤에 &page=(변수)
export const NowPlaying = () => {
  return fetch(url(Service.NowPlaying), options).then((res) => res.json());
};

export const TopRated = () => {
  return fetch(url(Service.TopRated), options).then((res) => res.json());
};
export const Popular = () => {
  return fetch(url(Service.Popular), options).then((res) => res.json());
};
export const Search = (Keyword) => {
  const searchUrl = Base_url + `${Service.Search}${Keyword}`;
  return fetch(url());
};
