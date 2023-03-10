import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

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
        <Button
          type="button"
          variant="contained"
          onClick={() => {
            navigate('/signup');
          }}
          size="large"
        >
          Try it now!
        </Button>
      </div>
    </section>
  );
};
export default HomePage;
