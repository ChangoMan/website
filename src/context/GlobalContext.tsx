import React from 'react';

// Context
const State = React.createContext();
const Dispatch = React.createContext();

// Initial State
const initialState = { navOpen: false };

// Reducer
const reducer = (state: any, action: any) => {
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
