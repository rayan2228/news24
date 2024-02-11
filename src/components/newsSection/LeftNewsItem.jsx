import getDateFormatter from "../../utils/hooks/dateFormat";
import Img from "../layouts/Img";

const LeftNewsItem = ({
  url,
  urlImg,
  title,
  description,
  className,
  publishedAt,
}) => {
  return (
    <div className={`col-span-12 md:col-span-4 ${className}`}>
      {urlImg && <Img className="w-full" src={urlImg} alt={title} />}
      <a href={url}>
        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
      </a>
      <p className="text-base text-[#5C5955]">{description}</p>
      <p className="mt-5 text-base text-[#5C5955]">
        {getDateFormatter(publishedAt, "date", true)}
      </p>
    </div>
  );
};

export default LeftNewsItem;
