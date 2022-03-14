import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { ToastContainer}from 'react-toastify'
import AppRoutes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
      <BrowserRouter>
          <GlobalStyle />
          <ToastContainer
          position="top-center"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          hideProgressBar={false}
          pauseOnHover
          />
          <AppRoutes />
      </BrowserRouter>
  );
}

export default App;