import Title from '@/components/title';
import { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery-next';

import styles from './gallery.module.scss';

function importAll(r: __WebpackModuleApi.RequireContext) {
  return r
    .keys()
    .filter((key: string) => key.startsWith('./'))
    .map(r);
}

const photos = importAll(
  require.context('@/assets/images/gallery/', false, /\.(png|jpe?g|svg)$/),
)
  .map((element) => element.default)
  .sort((a, b) => {
    const splittedA = a.src.split('/');
    const splittedB = b.src.split('/');

    const numA = Number(
      splittedA[splittedA.length - 1].split('.')[0].split('-')[1],
    );
    const numB = Number(
      splittedB[splittedB.length - 1].split('.')[0].split('-')[1],
    );

    return numA - numB;
  });

export default function GalleryPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_event: any, { index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.gallery}>
      <Title>GALERIA DE FOTOS</Title>

      <Gallery
        photos={photos}
        onClick={openLightbox}
        // columns={3}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : (
          <></>
        )}
      </ModalGateway>
    </div>
  );
}
