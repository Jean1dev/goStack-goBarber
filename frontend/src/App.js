import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import './config/Reactotron'
import { Router } from 'react-router-dom'
import history from './services/history'
import Routes from './routes'

import { store, persistor } from './store'
import './App.css'
import GlobalStyle from './styles/global'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes>
          </Routes>
          <GlobalStyle></GlobalStyle>
          <ToastContainer autoClose={3000}></ToastContainer>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App;
