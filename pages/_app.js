import { GoogleAnalytics } from 'nextjs-google-analytics';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <GoogleAnalytics trackPageViews>
        <Component {...pageProps} />
      </GoogleAnalytics>
    </>
  );
}

export default MyApp;
