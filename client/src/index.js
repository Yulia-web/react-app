import React, { Suspense, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import GoodsStore from './store/GoodsStore';
import './styles/index.css';
import './i18n';

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Context.Provider value={{
        user: new UserStore(),
        goods: new GoodsStore()
      }}>
        <App />
      </Context.Provider>
    </Suspense>
  </React.StrictMode>
);
