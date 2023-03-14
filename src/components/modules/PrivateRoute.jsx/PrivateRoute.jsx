import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsLogin } from 'redux/auth/auth-selector';

import { getAuth } from 'redux/auth/auth-selector';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }
  if (!isLogin && !token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
