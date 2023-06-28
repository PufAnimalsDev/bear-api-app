import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { GlobalContextProvider } from './context/GlobalContextProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GlobalContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </GlobalContextProvider>
);
