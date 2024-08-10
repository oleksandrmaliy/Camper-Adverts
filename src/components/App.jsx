import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

// import clsx from 'clsx';

// import { HomePage } from './pages/HomePage/HomePage.jsx';
// import { GalleryPage } from './pages/GalleryPage/GalleryPage.jsx';
// import { FavoritePage } from './pages/FavoritesPage/FavoritePage.jsx';
// import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage.jsx'));
const FavoritePage = lazy(() =>
  import('./pages/FavoritesPage/FavoritePage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

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
      <Suspense fallback={null}>
        <Routes>
          {/* <Route path="/" element={<Initial />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/*" element={<NotFoundPage />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
