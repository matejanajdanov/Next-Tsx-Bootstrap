import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return <Component className="container" {...pageProps} />;
}
export default MyApp;
