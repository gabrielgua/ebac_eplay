import styled from "styled-components";
import { colors } from "../../styles";

export const GalleryWrapper = styled.div``;

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
`;

export const GalleryAction = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  display: grid;
  place-items: center;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 250ms ease;

  img {
    width: 32px;
  }
`;

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: 1rem;
    display: block;
    border: 2px solid ${colors.white};
  }

  &:hover {
    border-color: ${colors.green};

    ${GalleryAction} {
      opacity: 1;
      cursor: pointer;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  place-items: center;

  &.open {
    display: grid;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    margin-block-end: 1rem;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  > img,
  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;
    box-shadow: 0 0px 5px ${colors.black};
    border-radius: 0.5rem;
  }

  iframe {
    border: none;
  }
`;
