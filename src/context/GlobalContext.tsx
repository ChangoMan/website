import React from 'react';

// Initial State
const initialState = { navOpen: false };

// Reducer
const reducer = (state: any, action?: any) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        navOpen: !state.navOpen
      };
    case 'CLOSE_NAV':
      return {
        ...state,
        navOpen: false
      };
    default:
      return state;
  }
};

// Context
const State = React.createContext(initialState);
const Dispatch = React.createContext(reducer);

// Provider
interface Props {
  children: React.ReactNode;
}

const Provider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  );
};

// Export
const GlobalContext = {
  State,
  Dispatch,
  Provider
};
export default GlobalContext;
