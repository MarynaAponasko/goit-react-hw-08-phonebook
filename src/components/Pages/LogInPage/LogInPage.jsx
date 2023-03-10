import LoginForm from 'components/modules/LoginForm/LoginForm';
import s from './LoginPage.module.css';

const LogInPage = () => {
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
