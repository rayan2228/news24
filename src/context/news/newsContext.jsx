import { useState } from "react";
import { createContext } from "react";
import useNewsQuery from "../../utils/hooks/useNewsQuery";

export const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, noData } = useNewsQuery(category, searchTerm);
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
        noData,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
