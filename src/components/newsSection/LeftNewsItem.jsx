import Img from "../layouts/Img";

const LeftNewsItem = ({ url, urlImg, title, description, className }) => {
  return (
    <div className={`col-span-12 md:col-span-4 ${className}`}>
      {urlImg && <Img className="w-full" src={urlImg} alt={title} />}
      <a href={url}>
        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{title}</h3>
      </a>
      <p className="text-base text-[#5C5955]">{description}</p>
      <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
    </div>
  );
};

export default LeftNewsItem;
