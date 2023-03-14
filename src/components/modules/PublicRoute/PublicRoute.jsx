import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { getAuth } from 'redux/auth/auth-selector';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);
  if (!isLogin && token) {
    return <p>...Loading</p>;
  }
  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }
  return <Outlet />;
};

export default PublicRoute;
