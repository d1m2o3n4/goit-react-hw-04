const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image.urls.regular)}
      />
    </>
  );
};
export default ImageCard;
