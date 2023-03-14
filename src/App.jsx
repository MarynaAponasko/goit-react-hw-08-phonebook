import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import PrivateRoute from 'components/modules/PrivateRoute.jsx/PrivateRoute';
import PublicRoute from 'components/modules/PublicRoute/PublicRoute';

import Layout from 'components/Layout/Layout';
import Loader from 'components/modules/Loader/Loader';

const HomePage = lazy(() => import('./components/Pages/HomePage/HomePage'));
const LogInPage = lazy(() => import('./components/Pages/LogInPage/LogInPage'));
const SignUpPage = lazy(() =>
  import('./components/Pages/SignUpPage/SignUpPage')
);
const Phonebook = lazy(() => import('./components/Pages/Phonebook/Phonebook'));
// import HomePage from 'components/Pages/HomePage/HomePage';
// import LogInPage from 'components/Pages/LogInPage/LogInPage';
// import SignUpPage from 'components/Pages/SignUpPage/SignUpPage';
// import Phonebook from 'components/Pages/Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<HomePage />} />
              <Route path="login" element={<LogInPage />} />
              <Route path="signup" element={<SignUpPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="phonebook" element={<Phonebook />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
