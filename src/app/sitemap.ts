import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hrseo.io',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://hrseo.io/en',
          es: 'https://hrseo.io/es',
          fr: 'https://hrseo.io/fr',
        },
      },
    },
    // Add other static pages here if needed
  ];
}
