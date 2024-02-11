import { useContext } from "react";
import { NewsContext } from "../../context/news/newsContext";
import NewsItem from "./NewsItem";

const RightSide = () => {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div className="self-start col-span-12 xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {/* news item */}
        {data.articles.map(
          (article, index) =>
            !article.description && (
              <NewsItem
                key={index}
                title={article.title}
                url={article.url}
                urlImg={article.urlToImage}
                content={article.content}
              />
            )
        )}
        {/* news item ends */}
      </div>
    </div>
  );
};

export default RightSide;
