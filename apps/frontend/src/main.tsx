import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from './apollo/client'; // Adjust the import path as necessary
import { ErrorBoundary } from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
    <ApolloProvider client={apolloClient}>
       <ErrorBoundary>
      <App />
      <ToastContainer />
      </ErrorBoundary>
    </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
