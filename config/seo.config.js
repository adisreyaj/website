export const getSEOMetaData = (meta) => {
  const { title, description, slug, image } = meta;
  const baseUrl = process.env.BASE_URL;
  return {
    title,
    description,
    canonical: `${baseUrl}/blog/${slug}`,
    openGraph: {
      url: `${baseUrl}/blog/${slug}`,
      title,
      description,
      type: 'blog',
      images: [
        {
          url: `${baseUrl}/feature-images/${image}.jpg`,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      site_name: 'Code - A dev journey',
    },
    twitter: {
      handle: '@adisreyaj',
      cardType: 'summary_large_image',
    },
  };
};
