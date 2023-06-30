"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";
type SearchContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
});
export const SearchProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <>{children}</>
    </SearchContext.Provider>
  );
};
