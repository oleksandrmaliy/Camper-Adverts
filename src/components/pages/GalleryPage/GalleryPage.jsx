import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdvertsPage } from '../../../redux/operations.js';
import { incrementPage } from '../../../redux/advertsSlice.js';
import {
  selectAdverts,
  selectPage,
  selectIsLoading,
  selectError,
} from '../../../redux/selectors.js';

const GalleryPage = () => {
  const gallery = 'Its gallery page !';
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchAdvertsPage(page));
    }
  }, [dispatch, page]);

  const handleIncrement = () => {
    dispatch(fetchAdvertsPage(page + 1));
    dispatch(incrementPage(page + 1));
  };

  console.log(adverts.length);
  console.log('isLoading   :' + isLoading);
  console.log('error   :' + error);
  console.log(adverts);

  return (
    <>
      <h2>{gallery}</h2>
      <h1>Camper adverts</h1>
      <div>
        <button onClick={handleIncrement}>count is {page}</button>
      </div>
    </>
  );
};

export default GalleryPage;
