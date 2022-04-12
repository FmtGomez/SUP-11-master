import logo from './logo.svg';
import './App.css';
import React from "react"
import store from "./store"
import Lobby from "./components/Lobby"
import Members from "./components/Member"
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <h1>Welcome to the SUP!</h1>
    <Members />
    <Lobby />

  </Provider>
)
export default App;