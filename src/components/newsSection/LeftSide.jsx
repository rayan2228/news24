import { useContext } from "react";
import { NewsContext } from "../../context/news/newsContext";
import LeftNewsItem from "./LeftNewsItem";

const LeftSide = () => {
  const { data } = useContext(NewsContext);
  const filterNews = data.articles?.filter(
    (article) => article.description !== null
  );

  return (
    //  lg:col-span-4 lg:col-span-8
    <div className="grid self-start grid-cols-12 col-span-12 gap-6 xl:col-span-8">
      {filterNews?.map((article, index) => (
        <LeftNewsItem
          className={index === 1 ? "lg:col-span-8" : `lg:col-span-4 ${index}`}
          key={index}
          description={article.description}
          title={article.title}
          url={article.url}
          urlImg={article.urlToImage}
          content={article.content}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
};

export default LeftSide;
