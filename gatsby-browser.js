// custom typefaces
import React from 'react';
import 'typeface-work-sans';
import GlobalContext from './src/context/GlobalContext';

export const wrapRootElement = ({ element }) => (
  <GlobalContext.Provider>{element}</GlobalContext.Provider>
);

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  console.log('Gatsby started to change location to', location.pathname);
  console.log(
    'Gatsby started to change location from',
    prevLocation ? prevLocation.pathname : null
  );
};
