import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { } from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignSign';

import { AuthProvider } from './src/hooks/auth'
import { Dashboard } from './src/screens/Dashboard';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />

        <AuthProvider>
          <SignIn />
        </AuthProvider>

      </NavigationContainer>
    </ThemeProvider>
  )

}
