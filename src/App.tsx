import { Route, Routes } from 'react-router-dom';
import { BeersPage } from './Pages/BeersPage/BeersPage';
import { FavouritesPage } from './Pages/FavouritesPage';
import './App.scss';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { ContactPage } from './Pages/ContactPage';
import { PageNotFound } from './Pages/PageNotFound';

export const App = () => (
  <div className='main'>
    <Routes>
      <Route path='/' element={<BeersPage />}>
        <Route path='details/:beerId' element={<BeersPage />} />
      </Route>
      <Route path='/favourites' element={<FavouritesPage />}>
        <Route path='details/:beerId' element={<BeersPage />} />
      </Route>
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </div>
);
