import { TextField, IconButton, Box, Button } from '@mui/material';
import { Person, Phone } from '@mui/icons-material';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

const ContactForm = () => {
  const contacts = useSelector(store => store.contacts.contacts);
  const dispatch = useDispatch();

  const isDublicate = name => {
    const result = contacts.find(contact => contact.name === name);
    return Boolean(result);
  };
  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }
    reset();
    dispatch(addContact({ name, number }));
  };

  const reset = () => {
    formik.values.name = '';
    formik.values.number = '';
    return;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      number: Yup.string().required('Number is required'),
    }),

    onSubmit: values => {
      handleAddContact(values);
    },
  });
  return (
    <div className={s.signin_wrapper}>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={s.title}> Add new contact</h2>
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
            <Phone />
          </IconButton>
          <TextField
            name="number"
            type="text"
            label="Number"
            size="small"
            variant="standard"
            margin="normal"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />
        </Box>
        {formik.touched.number && formik.errors.number ? (
          <div className={s.error_number}>{formik.errors.number}</div>
        ) : (
          <div className={s.error_number}></div>
        )}
        {!formik.errors.name && !formik.errors.number ? (
          <Button type="submit" variant="contained" margin="normal">
            Submit
          </Button>
        ) : (
          <Button disabled variant="contained" margin="normal">
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
