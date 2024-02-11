import { useState } from "react";
import { createContext } from "react";
import useNewsQuery from "../../utils/hooks/useNewsQuery";

export const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useNewsQuery();
  return (
    <NewsContext.Provider
      value={{
        category,
        setCategory,
        searchTerm,
        setSearchTerm,
        data,
        loading,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
