import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import HomePage from 'components/Pages/HomePage/HomePage';
import LogInPage from 'components/Pages/LogInPage/LogInPage';
import SignUpPage from 'components/Pages/SignUpPage/SignUpPage';
import Phonebook from 'components/Pages/Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<Phonebook />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};
