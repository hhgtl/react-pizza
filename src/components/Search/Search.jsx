import style from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={style.search__container}>
      <input
        className={style.input}
        placeholder="Знайти піццу.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
