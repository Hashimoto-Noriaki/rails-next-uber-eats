import axios from 'axios';
import { restaurantsIndex } from '../urls/index';

export const fetchRestaurants = () => {
  return axios.get(restaurantsIndex)
    .then(res => {
      if (res.data && res.data.restaurants) {
        return res.data;
      } else {
        console.error('Invalid data format:', res.data);
        return { restaurants: [] }; // デフォルト値として空の配列を返す
      }
    })
    .catch((e) => {
      console.error('Fetch error:', e);
      return { restaurants: [] }; // エラー時もデフォルト値を返す
    });
}
