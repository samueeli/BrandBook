export const loadFonts = (fontUrl: string) => {
  const fontFace = new FontFace('customFont', `url(${fontUrl})`);

  fontFace
    .load()
    .then((loadedFont) => {
      document.fonts.add(loadedFont);
      document.documentElement.style.fontFamily = 'customFont, sans-serif';
    })
    .catch((error) => {
      console.error('Error loading font:', error);
    });
};
