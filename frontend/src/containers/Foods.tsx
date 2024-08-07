// src/containers/Foods.tsx
import React, { useState, useEffect, Fragment } from 'react';
import { fetchFoods } from '../apis/foods';

interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const Foods: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetchFoods(1)
      .then((data) => {
        setFoods(data.foods);
      })
      .catch((error) => {
        console.error("Failed to fetch foods:", error);
      });
  }, []);

  return (
    <Fragment>
      <h1>フード一覧</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.price}円
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
