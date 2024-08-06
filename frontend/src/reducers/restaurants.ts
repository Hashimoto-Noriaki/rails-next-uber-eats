import { REQUEST_STATE } from '../constants';
// リデューサーファイル内で直接インターフェースを定義
interface Restaurant {
  id: number;
  name: string;
  description: string;
  fee: number;  // 例：配送料
  time_required: number;  // 例：所要時間
}

interface RestaurantsState {
  fetchState: string;
  restaurantsList: Restaurant[];
  error: string | null; // エラーを保持するためのプロパティを追加
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

interface FetchErrorAction {
  type: typeof restaurantsActionTypes.FETCH_ERROR;
  payload: string; // エラーメッセージ
}

type RestaurantsAction = FetchingAction | FetchSuccessAction | FetchErrorAction;

export const initialState: RestaurantsState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
  error: null, // 初期状態ではエラーはなし
};

export const restaurantsActionTypes = {
  FETCHING: 'FETCHING' as const,
  FETCH_SUCCESS: 'FETCH_SUCCESS' as const,
  FETCH_ERROR: 'FETCH_ERROR' as const, // 追加
};

export const restaurantsReducer = (state: RestaurantsState, action: RestaurantsAction): RestaurantsState => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
        error: null, // エラーをリセット
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
        error: null, // エラーをリセット
      };
    case restaurantsActionTypes.FETCH_ERROR:
      return {
        ...state,
        fetchState: REQUEST_STATE.ERROR,
        error: action.payload, // エラーメッセージを設定
      };
    default:
      throw new Error('Unknown action type');
  }
};
