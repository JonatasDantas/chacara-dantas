import '../styles/globals.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';
import { MainLayout } from '../components';
// import { ThemeProvider } from '@mui/material';
// import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={theme}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
    // </ThemeProvider>
  );
}
