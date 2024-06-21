import style from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slice/searchSlice';

const Search = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  return (
    <div className={style.search__container}>
      <input
        className={style.input}
        placeholder="Знайти піццу.."
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue({ searchValue: e.target.value }))}
      />
    </div>
  );
};

export default Search;
