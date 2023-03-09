import s from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';

import { nanoid } from 'nanoid';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlerFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const labelFilterId = nanoid();
  return (
    <>
      <label className={s.label} htmlFor={labelFilterId}>
        Find contact by name
      </label>
      <input
        className={s.label}
        id={labelFilterId}
        type="text"
        value={filter}
        onChange={handlerFilter}
      />
    </>
  );
};

export default Filter;
