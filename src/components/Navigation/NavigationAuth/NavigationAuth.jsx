import { NavLink } from 'react-router-dom';

const NavigationAuth = () => {
  return (
    <div>
      <NavLink to="/signup">Sign Up</NavLink>

      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default NavigationAuth;
