import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  console.log("MyApp Mounted");
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
