import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartContentProvider from './context/cartContent';
import TokenContextProvider from './context/tokenContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import CounterContextProvider from './context/counterContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
const query = new QueryClient();

root.render(
  
    <QueryClientProvider client={query}>
      <TokenContextProvider>
        <CartContentProvider>
          <CounterContextProvider>
          <App />
          </CounterContextProvider>
        </CartContentProvider>
      </TokenContextProvider>
    </QueryClientProvider>
  
);


