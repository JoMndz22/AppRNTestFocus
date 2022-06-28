import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';



const App = (props) => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (

    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
};

export default App;
