import { useNavigate } from 'react-router-dom';

import s from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={s.HomePage}>
      <div className={s.container}>
        <h1 className={s.title}>
          Tired of looking for phone numbers on millions of small papers?
        </h1>
        <p className={s.text}>Use our app and save numbers on laptops</p>
        <button
          type="button"
          className={s.button}
          onClick={() => {
            navigate('/signup');
          }}
        >
          Try it now!
        </button>
      </div>
    </section>
  );
};
export default HomePage;
