import axios from 'axios';

const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1';

export const foodsIndex = (restaurantId: number) => 
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`;

export const fetchFoods = async (restaurantId: number) => {
  try {
    const response = await axios.get(foodsIndex(restaurantId));
    return response.data;
  } catch (e) {
    console.error(e);
    return { foods: [] }; // エラー時には空のデータを返す
  }
};
