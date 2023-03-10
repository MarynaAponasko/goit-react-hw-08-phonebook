import { TextField, IconButton, Box, Button } from '@mui/material';
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import s from './SignUpForm.module.css';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required'),
      password: Yup.string().min(5).required('Password is required'),
    }),

    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className={s.signup_wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={s.title}> Sign Up Form</h2>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </Box>
        {formik.touched.name && formik.errors.name ? (
          <div className={s.error_msg}>{formik.errors.name}</div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </Box>
        {formik.touched.email && formik.errors.email ? (
          <div className={s.error_msg}>{formik.errors.email}</div>
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
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </Box>
        {formik.touched.password && formik.errors.password ? (
          <div className={s.error_password}>{formik.errors.password}</div>
        ) : (
          <div className={s.error_password}></div>
        )}
        {!formik.errors.email &&
        !formik.errors.password &&
        !formik.errors.name ? (
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
    </div>
  );
};
export default SignUpForm;
