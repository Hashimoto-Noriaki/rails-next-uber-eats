import { REQUEST_STATE } from '../constants';

// リデューサーファイル内で直接インターフェースを定義
interface Restaurant {
  id: number;
  name: string;
  description: string;
}

interface RestaurantsState {
  fetchState: string;
  restaurantsList: Restaurant[];
}

interface FetchingAction {
  type: 'FETCHING';
}

interface FetchSuccessAction {
  type: 'FETCH_SUCCESS';
  payload: {
    restaurants: Restaurant[];
  };
}

type RestaurantsAction = FetchingAction | FetchSuccessAction;

export const initialState: RestaurantsState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export const restaurantsReducer = (state: RestaurantsState, action: RestaurantsAction): RestaurantsState => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      // 型ナローイングを使用して、actionがFetchSuccessAction型であることを確認
      const fetchSuccessAction = action as FetchSuccessAction;
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: fetchSuccessAction.payload.restaurants,
      };
    default:
      throw new Error('Unknown action type');
  }
};
