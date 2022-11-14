import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Image, { StaticImageData } from 'next/image';

import landing1 from '@/assets/images/landing-1.jpg';
import landing2 from '@/assets/images/landing-2.jpg';
import landing3 from '@/assets/images/landing-3.jpg';
import landing4 from '@/assets/images/landing-4.jpg';

import styles from './landing.module.scss';
import { Button, Typography } from '@mui/material';

interface LandingPageInterface {
  image: StaticImageData;
  title: string;
  subtitle: string;
  buttonText: string;
}

export default function Landing() {
  const landingPages: LandingPageInterface[] = [
    {
      image: landing1,
      subtitle: 'ENCANTE-SE COM O CONFORTO',
      title: 'CONFIRA ESTA EXCLUSIVIDADE',
      buttonText: 'CLIQUE AQUI',
    },
    {
      image: landing2,
      subtitle: 'PERFEITO PARA SEU EVENTO',
      title: 'VEJA NOSSAS INSTALAÇÕES',
      buttonText: 'CLIQUE AQUI',
    },
    {
      image: landing3,
      subtitle: 'CONFORTO, TRANQUILIDADE & PRIVACIDADE',
      title: 'UM REFÚGIO EM MEIO A CIDADE',
      buttonText: 'CLIQUE AQUI',
    },
    {
      image: landing4,
      subtitle: 'HOSPEDAGEM, LAZER & EVENTOS ',
      title: 'VENHA REALIZAR SEU SONHO',
      buttonText: 'CLIQUE AQUI',
    },
  ];

  return (
    <div className={styles.landing}>
      <Swiper
        className={styles.carousel}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {landingPages.map((item) => (
          <SwiperSlide className={styles.carouselItem} key={item.image.src}>
            <div className={styles.landingCaptions}>
              <Typography
                className={styles.landingSubtitle}
                sx={{ fontWeight: 300 }}
              >
                {item.subtitle}
              </Typography>

              <Typography
                className={styles.landingTitle}
                sx={{ fontWeight: 300 }}
              >
                {item.title}
              </Typography>

              <Button
                className={styles.landingButton}
                variant="outlined"
                size="large"
                color="info"
              >
                {item.buttonText}
              </Button>
            </div>
            <div className={styles.landingOverlay}></div>
            <Image
              className={styles.landingImage}
              src={item.image}
              alt="front"
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
