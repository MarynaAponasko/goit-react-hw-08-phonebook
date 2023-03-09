import { NavLink } from 'react-router-dom';

import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationUser from './NavigationUser/NavigationUser';

import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li>
          <NavLink className={s.navigationItem} to="/">
            Home
          </NavLink>
          <NavLink className={s.navigationItem} to="/phonebook">
            Contacts
          </NavLink>
        </li>
      </ul>
      <ul className={s.navigationList}>
        <NavigationAuth />
        <NavigationUser />
      </ul>
    </nav>
  );
};
export default Navigation;
