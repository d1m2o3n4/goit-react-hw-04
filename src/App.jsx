import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/SearchBar";
import { getImages } from "./service/imageApi";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!query.trim()) return;

    setIsLoading(true);

    getImages(query, page)
      .then(({ data }) => {
        if (data.results.length === 0) {
          return;
        }
        setImages((prev) => [...prev, ...data.results]);
        setShowBtn(page < Math.ceil(data.total / 10));
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
    if (event.target.search.value === "") {
      toast.error("Введіть текст!");
      return;
    }

    setShowBtn(false);
    setImages([]);
    setPage(1);
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };
  const openModal = (largeImage) => {
    setLargeImage(largeImage);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(page);
  console.log(query);
  console.log(images);
  return (
    <>
      <Toaster position="top-right" />
      <Header onSubmit={onSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMoreBtn loadMore={loadMore} />}
      {largeImage && (
        <ImageModal
          largeImage={largeImage}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
