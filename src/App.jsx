import NewsContextProvider from "./context/news/newsContext";
import Home from "./pages/Home";

function App() {
  return (
    <NewsContextProvider>
      <Home />
    </NewsContextProvider>
  );
}

export default App;
