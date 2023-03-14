import { TextField, IconButton, Box, Button } from '@mui/material';
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import * as Yup from 'yup';

import s from './SignUpForm.module.css';

const registerSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().min(7).required('Password is required'),
});
const initialValuesRegister = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleFormSubmit = values => {
    console.log(values);

    dispatch(register(values));
  };

  return (
    <div className={s.signup_wrapper}>
      <h2 className={s.title}> Sign Up Form</h2>
      <Formik
        initialValues={initialValuesRegister}
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
                <Person />
              </IconButton>
              <TextField
                name="name"
                type="text"
                label="Name"
                size="small"
                variant="standard"
                margin="normal"
                fullWidth
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </Box>
            {touched.name && errors.name ? (
              <div className={s.error_msg}>{errors.name}</div>
            ) : null}
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
            {!errors.email && !errors.password && !errors.name ? (
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            ) : (
              <Button disabled variant="contained">
                Sign Up
              </Button>
            )}
            <p className={s.optionalText}>
              Already have an account?{' '}
              <span
                onClick={() => {
                  navigate('/login');
                }}
                className={s.signupLink}
              >
                Login
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default SignUpForm;
