import { Input } from "antd";

const { Search: SearchComponent } = Input;

const Search = () => {
  return (
    <div>
      <SearchComponent
        placeholder="input search loading with enterButton"
        loading
        enterButton
      />
    </div>
  );
};

export default Search;
