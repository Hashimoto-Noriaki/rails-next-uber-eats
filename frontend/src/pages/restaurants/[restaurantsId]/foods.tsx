import { GetServerSideProps } from 'next';
import { fetchFoods } from '../../../apis/foods';
import { Foods } from '../../../containers/Foods';

interface Food {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface Props {
  foods: Food[];
}

const FoodsPage: React.FC<Props> = ({ foods }) => {
  return <Foods initialFoods={foods} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { restaurantId } = context.query;

  const restaurantIdNumber = typeof restaurantId === 'string' ? parseInt(restaurantId, 10) : NaN;

  if (isNaN(restaurantIdNumber)) {
    return { props: { foods: [] } }; // 変数が適切な形式でない場合は空の配列を返す
  }

  try {
    const data = await fetchFoods(restaurantIdNumber);
    return {
      props: {
        foods: data.foods || [], // 型の保証を強化
      },
    };
  } catch (error) {
    console.error("Failed to fetch foods:", error);
    return { props: { foods: [] } }; // エラーが発生した場合は空の配列を返す
  }
};

export default FoodsPage;