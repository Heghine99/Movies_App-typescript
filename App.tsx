import React from 'react';
import {SafeAreaView} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/HomeScreen/homeScreen';
import {Provider} from 'react-redux';
import {store} from './src/state-management/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
