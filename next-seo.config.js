const title = 'Home';
const description =
  'Front-end engineer building useful, beautiful interfaces in Colorado.';
const url = 'https://www.ansonlichtfuss.com';

export default {
  title,
  titleTemplate: '%s - Anson Lichtfuss',
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: url,
    title,
    description,
    images: [
      {
        url: 'https://www.ansonlichtfuss.com/assets/banner.jpg',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@ansonlichtfuss',
    site: '@ansonlichtfuss',
    cardType: 'summary_large_image',
  },
};
