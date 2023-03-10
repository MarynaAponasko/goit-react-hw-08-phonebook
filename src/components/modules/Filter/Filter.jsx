import s from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { Input, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handlerFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <h3 className={s.findTitle}>Find contact by name</h3>

      <Input
        placeholder="Enter a name ..."
        name="name"
        type="text"
        label="Name"
        size="small"
        variant="outlined"
        margin="dense"
        onChange={handlerFilter}
        value={filter}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
};

export default Filter;
