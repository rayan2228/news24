import Img from "../layouts/Img";

const NewsItem = ({ title, url, content, urlImg }) => {
  console.log();
  return (
    <div className={`col-span-12 mb-6 md:col-span-8`}>
      {urlImg && <Img className="w-full mt-5" src={urlImg} alt={title} />}

      {/* info */}
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href={url} target="_blank">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{content}</p>
        <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
      </div>
    </div>
  );
};

export default NewsItem;
