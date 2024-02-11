const Img = ({ src, alt, className }) => {
  return (
    <picture>
      <img src={src} alt={alt} className={className} loading="lazy" />
    </picture>
  );
};

export default Img;
