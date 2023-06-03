import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Lora } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  // this will be the css variable
  variable: "--font-raleway",
});
const lora = Lora({
  subsets: ["latin"],
  // this will be the css variable
  
  variable: "--font-lora",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${raleway.style.fontFamily};
            --font-lora: ${lora.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </main>
  );
}
