import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={s.input}
      type="text"
      placeholder="Search contacts"
      onChange={e => dispatch(changeFilter(e.target.value))}
    />
  );
};

export default SearchBox;
