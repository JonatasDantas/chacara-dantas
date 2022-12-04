import Title from '@/components/title';
import { DirectionsRun, Nightlife, Park } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';

import styles from './structure.module.scss';

import internalImage from '@/assets/images/gallery/PIC-17.jpeg';
// import kitchenImage from '@/assets/images/espaço/kitchen.jpg';
// import gardenImage from '@/assets/images/espaço/garden.jpg';

export default function StructurePage() {
  return (
    <>
      <div className={styles.aboutUs}>
        <Title>SOBRE NÓS</Title>

        <div className={styles.aboutGrid}>
          <Image
            className={styles.aboutImage}
            src={internalImage}
            alt="internal"
          ></Image>
          <Typography className={styles.info}>
            A Chácara Dantas nasceu para alinhar os conceitos de área verde com
            espaço para eventos, trazendo sempre o maior conforto para
            realização de eventos.
            <br />
            <br />
            Nosso espaço fica situado em Franco da Rocha, São Paulo, com acesso
            totalmente asfaltado e a menos de 10 minutos das estações de trem
            Franco da Rocha e Caieiras.
            <br />
            <br />
            Nossa estrutura é pronta para receber os mais diversos eventos,
            como: aniversários, casamentos, confraternizações, eventos
            empresariais, formaturas, e muito mais!
          </Typography>
        </div>
      </div>
      <div className={styles.theStructure}>
        <Title>NOSSO ESPAÇO</Title>

        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <Park />
            <Typography className={styles.title}>1.000.000 m²</Typography>
            <Typography className={styles.subtitle}>
              Entre espaço verde e construção
            </Typography>
          </div>

          <div className={styles.highlight}>
            <Nightlife />
            <Typography className={styles.title}>Salão de festas</Typography>
            <Typography className={styles.subtitle}>
              Perfeito para grandes comemorações
            </Typography>
          </div>

          <div className={styles.highlight}>
            <DirectionsRun />
            <Typography className={styles.title}>
              Completo e equipado
            </Typography>
            <Typography className={styles.subtitle}>
              Esportes, brinquedos, piscinas e jogos
            </Typography>
          </div>
        </div>
      </div>

      {/* <div className={styles.accommodations}>
        <div className={styles.accommodation}>
          <Image src={kitchenImage} alt="kitchenImage"></Image>
          <div className={styles.accommodationDescription}>
            <Typography className={styles.title}>
              Cozinha ampla e equipada
            </Typography>
            <Typography className={styles.subtitle}>
              A Chácara Dantas possui uma cozinha completa e pronta para grandes
              eventos, com todos os utensílios, incluindo Freezer e fogão
              industrial
            </Typography>
          </div>
        </div>

        <div className={styles.accommodation}>
          <div className={styles.accommodationDescription}>
            <Typography className={styles.title}>
              Área de lazer completa com quadra
            </Typography>
            <Typography className={styles.subtitle}>
              Grande espaço verde para área de lazer, perfeito para aproveitar
              uma piscina e praticar esportes em um dia ensolarado.
            </Typography>
          </div>
          <Image src={gardenImage} alt="kitchenImage"></Image>
        </div>
      </div> */}

      {/* TODO SERVICES */}
      <div className="services">
        <Title>NOSSOS SERVIÇOS</Title>

        <div className="servicesList">
          <div className="service"></div>
        </div>
      </div>
    </>
  );
}
