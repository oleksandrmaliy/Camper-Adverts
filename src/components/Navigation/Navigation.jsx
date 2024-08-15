import { NavLink, Link } from 'react-router-dom';
import CamperLogo from '../../assets/camper.svg';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <div className={css.logoTitle}>
        <Link to="/">
          <img src={CamperLogo} alt="Camper Logo" className={css.logo} />
        </Link>
        <span className={css.title1}>
          <h1>Campervan Rental</h1>
        </span>
      </div>
      <ul className={css.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.activeLink}` : css.navLink
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
