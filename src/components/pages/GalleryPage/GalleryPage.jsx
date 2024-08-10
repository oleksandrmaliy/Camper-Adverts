import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAdvertsPage } from '../../../redux/operations.js';
// import { incrementPage } from '../../../redux/advertsSlice.js';
import {
  selectAdverts,
  selectPage,
  selectIsLoading,
  selectError,
  selectNoData,
} from '../../../redux/selectors.js';

const GalleryPage = () => {
  const gallery = 'Its gallery page !';
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const noData = useSelector(selectNoData);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchAdvertsPage(page));
      // dispatch(incrementPage(page + 1));
    }
  }, []);

  const handleIncrement = () => {
    dispatch(fetchAdvertsPage(page));
    // dispatch(incrementPage(page + 1));
  };

  console.log(adverts);

  console.log('isLoading   :' + isLoading);
  console.log('error   :' + error);
  console.log(noData);

  return (
    <>
      <h2>{gallery}</h2>
      <h1>Camper adverts</h1>
      <div>
        {noData ? (
          <p>No more data to load !</p>
        ) : (
          <div>
            <button onClick={handleIncrement}>Load more</button>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
