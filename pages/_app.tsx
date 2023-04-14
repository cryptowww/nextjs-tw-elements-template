import '@/styles/globals.css'
import { useEffect } from "react";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("tw-elements");
    import("tw-elements/dist/css/tw-elements.min.css");
  }, []);
  return <Component {...pageProps} />
}
