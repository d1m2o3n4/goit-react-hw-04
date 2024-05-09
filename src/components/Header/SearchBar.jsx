import s from "./SearchBar.module.css";
const Header = ({ onSubmit }) => {
  return (
    <header>
      <form className={s.seacrhHeader} onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
export default Header;
