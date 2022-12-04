import Title from '@/components/title';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Alert,
  Button,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { Close, WhatsApp } from '@mui/icons-material';
import Input from '@/components/input';

import styles from './contact.module.scss';

export default function Contact() {
  const formRef = useRef();
  const [alert, setAlert] = useState<unknown>(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        phone: Yup.string()
          .transform((phoneData) =>
            phoneData.match(/\d/g) ? phoneData.match(/\d/g).join('') : '',
          )
          .required('Telefone é obrigatório'),
        message: Yup.string().required('Mensagem é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      emailjs
        .send(
          'service_lhhyp0k',
          'template_e66p5ie',
          data,
          'user_v8CGzXWhccEG6MdVEtZnX',
        )
        .then(
          () => {
            setAlert({
              success: true,
              message:
                'Mensagem enviada com sucesso! Retornaremos o contato via ou email',
            });
          },
          () => {
            setAlert({
              success: false,
              message:
                'Erro no envio da mensagem! Por favor, nos chame via Whatsapp',
            });
          },
        );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = {};

        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <div className={styles.contact}>
        <Title>CONTATO</Title>

        <Typography style={{ margin: 20 }}>
          Entre em contato conosco e faça um orçamento. Será um prazer
          atendê-lo(a)!
          <br />
          Se preferir, nosso whatsapp é (11) 98034-2771.
        </Typography>

        <Form
          className={styles.contactForm}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Collapse in={alert}>
            <Alert
              variant="filled"
              style={{ marginBottom: 20 }}
              severity={alert ? (alert.success ? 'success' : 'error') : ''}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setAlert(null);
                  }}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
            >
              {alert ? alert.message : ''}
            </Alert>
          </Collapse>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="name"
                id="name"
                label={'Nome'}
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="email"
                id="email"
                label="Nome"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                name="phone"
                id="phone"
                label="Telefone"
                mask="(99) 99999-9999"
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                name="message"
                id="message"
                label="Mensagem"
                multiline
                rows={5}
                variant="outlined"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className={styles.buttonsContainer} container spacing={2}>
            <Grid item>
              <Button type="submit" variant="contained" color="primary">
                Enviar Mensagem
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                endIcon={<WhatsApp />}
                onClick={() => {
                  window.open(
                    'https://api.whatsapp.com/send?phone=5511960126820',
                    '_blank',
                  );
                }}
              >
                Nos chame no Whatsapp
              </Button>
            </Grid>
          </Grid>
        </Form>
      </div>
    </>
  );
}
