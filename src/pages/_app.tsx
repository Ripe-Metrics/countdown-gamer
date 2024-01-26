// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/lib/redux/store';
import '@/lib/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;



