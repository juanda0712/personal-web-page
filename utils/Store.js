import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  nav: Cookies.get('nav') ? JSON.parse(Cookies.get('nav')) : { navstate: 'home' },
};

function reducer(state, action) {
  switch (action.type) {
    case 'NAV_UPDATE_NAVSTATE':
      const navstate = action.payload;
      return { ...state, nav: { ...state.nav, navstate } };

    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
