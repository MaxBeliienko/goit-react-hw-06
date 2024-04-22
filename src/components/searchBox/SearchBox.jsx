import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleChangeSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
