import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from 'redux/auth/auth-selector';
import { IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';

import { logout } from 'redux/auth/auth-operations';

import s from './NavigationUser.module.css';

const NavigationUser = () => {
  const selectUserInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={s.userBox}>
      <p className={s.invitationMsg}>
        Hello, <b>{selectUserInfo.name}</b>
      </p>

      <IconButton
        type="button"
        onClick={onLogout}
        color="primary"
        aria-label="add to shopping cart"
      >
        <Logout />
      </IconButton>
    </div>
  );
};

export default NavigationUser;
