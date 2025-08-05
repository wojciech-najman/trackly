export const getRandomPlaceholderImage = () => {
  const images = [
    '/images/placeholders/placeholder-image-1.jpg',
    '/images/placeholders/placeholder-image-2.jpg',
    '/images/placeholders/placeholder-image-3.jpg',
    '/images/placeholders/placeholder-image-4.jpg',
    '/images/placeholders/placeholder-image-5.jpg',
  ];

  return images[Math.round(Math.random() * 4)];
};
