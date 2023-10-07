import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {apiSlice} from './src/app/apiSlice';

const AppWithApiProvider = () => (
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);

AppRegistry.registerComponent(appName, () => AppWithApiProvider);
