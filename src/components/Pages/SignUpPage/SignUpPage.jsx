import SignUpForm from 'components/modules/SingUpForm/SingUpForm';
// import { useDispatch } from 'react-redux';
// import { signup } from 'redux/auth/auth-operations';
import s from './SignUpPage.module.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selector';
import { Navigate } from 'react-router-dom';

const SignUpPage = () => {
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }
  return (
    <>
      <section className={s.signUpPage}>
        <div className={s.signUpContainer}>
          <SignUpForm />
        </div>
      </section>
    </>
  );
};
export default SignUpPage;
