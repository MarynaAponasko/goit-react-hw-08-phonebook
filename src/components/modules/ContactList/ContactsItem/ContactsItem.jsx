import PropTypes from 'prop-types';
import { IconButton, Avatar } from '@mui/material';

import { Delete } from '@mui/icons-material';
import s from '../ContactList.module.css';

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  const stringToColor = string => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  return (
    <li key={id} className={s.item}>
      <Avatar sx={{ bgcolor: `${stringToColor(name)}` }}>
        {name.charAt(0).toUpperCase()}
      </Avatar>
      <p className={s.text}>
        {name}: {number}
      </p>

      <IconButton aria-label="delete" onClick={() => deleteContact(id)}>
        <Delete />
      </IconButton>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
