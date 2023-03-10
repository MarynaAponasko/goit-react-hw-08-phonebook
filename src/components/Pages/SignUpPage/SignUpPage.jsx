// import SignUpForm from 'components/modules/SignUpForm/SignUpForm';
import SignUpForm from 'components/modules/SingUpForm/SingUpForm';
import s from './SignUpPage.module.css';

const SignUpPage = () => {
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
