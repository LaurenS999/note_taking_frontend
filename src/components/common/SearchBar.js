import '../../styles/searchBox.css';
import '../../styles/button.css';
function SearchBar({ search, setSearch, button ,onAddclick }) {
  return (
    <div>
        <input
          className='searchBox'
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn-save" onClick={onAddclick}>{button}</button>
      </div>
  );
}

export default SearchBar;