import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ largeImage, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={s.modalOverlay}
      className={s.modalWindow}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
    >
      <img src={largeImage} />
    </Modal>
  );
};
export default ImageModal;
