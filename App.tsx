import React from 'react';
import Navigation from './src/Navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/state-management/store';
import {DarkModeContextProvider} from './src/components/Context/context';
const App = () => {
  return (
    <Provider store={store}>
      <DarkModeContextProvider>
        <Navigation />
      </DarkModeContextProvider>
    </Provider>
  );
};

export default App;
