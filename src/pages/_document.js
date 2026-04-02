import { Html, Head, Main, NextScript } from "next/document";
import { ImageKitProvider } from "imagekitio-next";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicons/logo_nova.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Inter:wght@400;600&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}>
          <Main />
          <NextScript />
        </ImageKitProvider>
      </body>
    </Html>
  );
}
