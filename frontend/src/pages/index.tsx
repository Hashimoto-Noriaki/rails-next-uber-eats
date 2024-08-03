// src/pages/index.tsx

import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/restaurants/1/foods">Restaurants 1 Foods</Link>
          </li>
          <li>
            <Link href="/restaurants/2/foods">Restaurants 2 Foods</Link>
          </li>
          <li>
            <Link href="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
