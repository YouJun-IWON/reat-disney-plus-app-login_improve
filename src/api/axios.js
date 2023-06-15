import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '061e46c3d95124af068d67c7ba2d6523',
    language: 'ko-KR',
  },
});

export default instance;
