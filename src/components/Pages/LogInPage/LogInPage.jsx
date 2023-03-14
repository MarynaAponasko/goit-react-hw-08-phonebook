import LoginForm from 'components/modules/LoginForm/LoginForm';
import s from './LoginPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const LogInPage = () => {
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }
  return (
    <>
      <section className={s.loginPage}>
        <div className={s.loginContainer}>
          <LoginForm />
        </div>
      </section>
    </>
  );
};
export default LogInPage;
