import { NavLink } from 'react-router-dom';

import s from './NavigationAuth.module.css';

const NavigationAuth = () => {
  return (
    <div>
      <NavLink to="/signup" className={s.navigationItem}>
        Sign Up
      </NavLink>{' '}
      {' | '}
      <NavLink to="/login" className={s.navigationItem}>
        Login
      </NavLink>
    </div>
  );
};
export default NavigationAuth;
