import getDateFormatter from "../../utils/dateFormat";
import Img from "../layouts/Img";

const NewsItem = ({ title, url, content, urlImg, publishedAt }) => {
  console.log();
  return (
    <div
      className={`col-span-12  md:col-span-8 border-b-2 border-[#D5D1C9] pb-4 ${
        urlImg && "order-first"
      }`}
    >
      {urlImg && (
        <Img className="object-cover w-full" src={urlImg} alt={title} />
      )}

      {/* info */}
      <div className="col-span-12 py-3 md:col-span-4">
        <a href={url} target="_blank">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{content}</p>
        <p className="mt-5 text-base text-[#94908C]">
          {getDateFormatter(publishedAt, "date", true)}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
