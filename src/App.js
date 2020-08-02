import React from 'react';
import Navigation from './layout/navigation';
import Main from './layout/main';

const App = ({ children }) => [
  <Navigation key='navigation' />,
  <Main key='main'>
    {children}
  </Main>,
];

export default App;
