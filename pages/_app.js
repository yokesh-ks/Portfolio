import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Main";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Layout router={router}/>
      <Component {...pageProps} key={router.route}/>
    </ChakraProvider>
  );
}

export default MyApp;
