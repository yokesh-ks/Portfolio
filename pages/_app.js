import "../styles/globals.css";
import Layout from "../components/layout/Main";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Layout router={router}/>
      <Component {...pageProps} key={router.route}/>
    </>
  );
}

export default MyApp;
