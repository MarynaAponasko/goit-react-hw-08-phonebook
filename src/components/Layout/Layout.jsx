import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import s from './layout.module.css';
const Layout = () => {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <Navigation />
      </header>
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
