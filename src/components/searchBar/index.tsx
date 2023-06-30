import { SearchContext } from "@/context/Search";
import React, { useContext, useRef } from "react";
import styles from "./search.module.css";
export default function SearchBar() {
  const { setSearch } = useContext(SearchContext);
  //   const searchValue = useRef("");
  //   const searchTerm = () => {
  //     setSearch(searchValue.current.value);
  //   };
  const searchValue = useRef<HTMLInputElement>(null);

  const searchTerm = () => {
    if (searchValue.current) {
      setSearch(searchValue.current.value);
    }
  };
  const submitQuery = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitQuery}>
      <input
        className="Input"
        placeholder="Search Cocktail..."
        type="text"
        ref={searchValue}
        onChange={searchTerm}
      />
    </form>
  );
}
