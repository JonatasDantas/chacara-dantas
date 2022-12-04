import Title from '@/components/title';
import { Typography } from '@mui/material';

import styles from './localization.module.scss';

export default function StructurePage() {
  return (
    <div className={styles.localization}>
      <Title>LOCALIZAÇÃO</Title>

      <div className={styles.info}>
        <Typography>
          Nossa chácara possui acesso asfaltado a menos de 5 min da Rod. Pres.
          Tancredo de Almeida Neves. <br />
          Confira nossa localização aproximada:
        </Typography>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7077.9838259452345!2d-46.7585212069819!3d-23.323220973420625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1669940826740!5m2!1sen!2sbr"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
