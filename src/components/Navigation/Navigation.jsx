import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationUser from './NavigationUser/NavigationUser';
import { selectIsLogin } from 'redux/auth/auth-selector';

import s from './Navigation.module.css';
const Navigation = () => {
  const isLogin = useSelector(selectIsLogin);
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li>
          {isLogin ? (
            <NavLink className={s.navigationItem} to="/phonebook">
              {' '}
              My contacts{' '}
            </NavLink>
          ) : (
            <NavLink className={s.navigationItem} to="/">
              Home
            </NavLink>
          )}
        </li>
        <li>{isLogin ? <NavigationUser /> : <NavigationAuth />}</li>
      </ul>
    </nav>
  );
};
export default Navigation;
