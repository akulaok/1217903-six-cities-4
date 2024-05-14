import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import { mockReviews } from './mocks/review.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App reviews={mockReviews} />
    </Provider>
  </React.StrictMode>
);
