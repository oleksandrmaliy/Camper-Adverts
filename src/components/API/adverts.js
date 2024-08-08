import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b388ab7fba54a5b7ed51b4.mockapi.io/advert/',
  params: {
    limit: 4,
  },
});

export const getAdvert = (page) => {
  return instance.get(`/?page=${page}`);
};
