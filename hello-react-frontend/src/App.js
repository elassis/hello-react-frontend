import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import './App.css';
import configureStore from './configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
