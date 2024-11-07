import zelda from "../../assets/images/zelda.png";
import spider from "../../assets/images/banner-homem-aranha.png";

import {
  GalleryAction,
  GalleryItem,
  GalleryList,
  Modal,
  ModalContent,
} from "./styles";

import zoomIcon from "../../assets/images/zoom.png";
import playIcon from "../../assets/images/play.png";
import closeIcon from "../../assets/images/fechar.png";
import { useState } from "react";

type GalleryProps = {
  defaultCover: string;
  name: string;
};

type GalleryItem = {
  type: "img" | "video";
  url: string;
};

const mock: GalleryItem[] = [
  { type: "img", url: zelda },
  { type: "video", url: "https://www.youtube.com/embed/uHGShqcAHlQ" },
];

type ModalState = {
  type: "img" | "video";
  url: string;
  isOpen: boolean;
};

const Gallery = ({ defaultCover, name }: GalleryProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    type: "img",
    url: "",
  });

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === "img") return item.url;

    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    return item.type === "img" ? zoomIcon : playIcon;
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: "img",
      url: "",
    });
  };

  return (
    <>
      <GalleryList>
        {mock.map((m) => (
          <GalleryItem
            key={m.url}
            onClick={() => {
              setModalState({ isOpen: true, type: m.type, url: m.url });
            }}
          >
            <img src={getMediaCover(m)} alt={name} />
            <GalleryAction>
              <img src={getMediaIcon(m)} alt="Zoom" />
            </GalleryAction>
          </GalleryItem>
        ))}
      </GalleryList>
      <Modal className={modalState.isOpen ? "open" : ""}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <button onClick={closeModal}>
              <img src={closeIcon} alt="Fechar" />
            </button>
          </header>
          {modalState.type === "img" ? (
            <img src={modalState.url} alt="Salve" />
          ) : (
            <iframe src={modalState.url}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
};

export default Gallery;
