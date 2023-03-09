import PropTypes from 'prop-types';
import s from '../ContactList.module.css';

const ContactItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li key={id} className={s.item}>
      <p className={s.text}>
        {name}: {number}
      </p>

      <button
        className={s.button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
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
