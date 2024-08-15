import css from './FavoritePage.module.css';

const FavoritePage = () => {
  const favorite = 'Its favorite page !';

  return (
    <>
      <div className={css.favorite}>
        <h2>{favorite}</h2>
      </div>
    </>
  );
};

export default FavoritePage;
