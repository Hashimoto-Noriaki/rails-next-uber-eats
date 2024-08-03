import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link href="/restaurants">Restaurants List</Link>
          </li>
          <li>
            <Link href="/foods">Foods List</Link>
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
