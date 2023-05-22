import { GoogleAnalytics } from 'nextjs-google-analytics';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
