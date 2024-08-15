import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const GalleryPage = lazy(() => import('../pages/GalleryPage/GalleryPage.jsx'));
const FavoritePage = lazy(() =>
  import('../pages/FavoritesPage/FavoritePage.jsx')
);
const NotFoundPage = lazy(() => import('../pages/HomePage/HomePage.jsx'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
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
