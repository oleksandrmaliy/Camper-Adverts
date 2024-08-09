import { useEffect } from 'react';
import { fetchAdvertsPage } from '../src/redux/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from '../src/redux/advertsSlice.js';
import {
  selectAdverts,
  selectPage,
  selectIsLoading,
  selectError,
} from './redux/selectors.js';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log('Fetching adverts for page:', page);
    dispatch(fetchAdvertsPage(page));
  }, [dispatch, page]);

  const handleIncrement = () => {
    dispatch(incrementPage());
  };

  console.log(isLoading);
  console.log(error);
  console.log('adverts:   ' + adverts);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>count is {page}</button>
      </div>
    </>
  );
}

export default App;
