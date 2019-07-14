import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import favicon from '../static/images/icons/favicon.ico';
import theme from '../style/theme';

class HotCitiesDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="Hot Cities monitors world cities temperatures in real time from global weather services to determine the hottest one, right now."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content={theme.palette.accent} />
          <meta
            property="og:title"
            content="Hot Cities • world hottest city, now."
          />
          <meta
            property="og:description"
            content="Hot Cities monitors world cities temperatures in real time from global weather services to determine the hottest one, right now."
          />
          <meta property="og:image" content={favicon} />
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href="/static/fonts/quicksand-v9-latin-ext_latin-300.woff2"
            crossOrigin
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link href={favicon} rel="icon" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default HotCitiesDocument;
