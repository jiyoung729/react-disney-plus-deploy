import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c6a3dab6b2ed601446745f5b7d51b695",
    language: "ko-KR"
  }
})

export default instance;