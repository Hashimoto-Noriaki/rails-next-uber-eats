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
  type: typeof restaurantsActionTypes.FETCHING;
}

interface FetchSuccessAction {
  type: typeof restaurantsActionTypes.FETCH_SUCCESS;
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
  FETCHING: 'FETCHING' as const,
  FETCH_SUCCESS: 'FETCH_SUCCESS' as const,
};

export const restaurantsReducer = (state: RestaurantsState, action: RestaurantsAction): RestaurantsState => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error('Unknown action type');
  }
};
