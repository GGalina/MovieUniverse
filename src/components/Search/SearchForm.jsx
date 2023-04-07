import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import s from "./SearchForm.module.css";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [, setSearch] = useSearchParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch({ keyword: input});
  };
 
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="input"
        placeholder="Search movies..."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className={s.button}type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;