import { Routes, Route, NavLink } from 'react-router-dom';
// import clsx from 'clsx';

import { HomePage } from './pages/HomePage/HomePage.jsx';
import { GalleryPage } from './pages/GalleryPage/GalleryPage.jsx';
import { FavoritePage } from './pages/FavoritesPage/FavoritePage.jsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <>
      {/* <h1>Camper adverts</h1>
      <div>
        <button onClick={handleIncrement}>count is {page}</button>
      </div> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Initial />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
