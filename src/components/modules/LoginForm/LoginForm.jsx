import { TextField, IconButton, Box, Button } from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import * as Yup from 'yup';
import s from './LoginForm.module.css';
import { useDispatch } from 'react-redux';

const registerSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().min(7).required('Password is required'),
});
const initialValuesLogin = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleFormSubmit = values => {
    console.log(values);
    dispatch(login(values));
  };

  return (
    <div className={s.signin_wrapper}>
      <h2 className={s.title}> Login Form</h2>
      <Formik
        initialValues={initialValuesLogin}
        validationSchema={registerSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <IconButton>
                <Email />
              </IconButton>
              <TextField
                name="email"
                type="text"
                label="Email"
                size="small"
                variant="standard"
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Box>
            {touched.email && errors.email ? (
              <div className={s.error_msg}>{errors.email}</div>
            ) : null}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <IconButton>
                <Lock />
              </IconButton>
              <TextField
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                className="textField"
                size="small"
                variant="standard"
                fullWidth
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Box>
            {touched.password && errors.password ? (
              <div className={s.error_password}>{errors.password}</div>
            ) : (
              <div className={s.error_password}></div>
            )}

            {!errors.email && !errors.password ? (
              <Button type="submit" variant="contained" margin="normal">
                Login
              </Button>
            ) : (
              <Button disabled variant="contained" margin="normal">
                Login
              </Button>
            )}

            <p className={s.optionalText}>
              Don't have an account?{' '}
              <span
                onClick={() => {
                  navigate('/signup');
                }}
                className={s.signupLink}
              >
                Sign up
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
