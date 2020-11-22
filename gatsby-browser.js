// custom typefaces
import React from 'react';
import 'typeface-work-sans';
import GlobalContext from './src/context/GlobalContext';
require('prismjs/themes/prism.css');

export const wrapRootElement = ({ element }) => (
  <GlobalContext.Provider>{element}</GlobalContext.Provider>
);

// export const onPreRouteUpdate = ({ location, prevLocation }) => {

// };
