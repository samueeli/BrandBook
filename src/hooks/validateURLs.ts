export const validateFontUrl = async (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const font = new FontFace('Font', `url(${url})`);
    font
      .load()
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
};

export const validateImageUrl = async (url: string) => {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject();
    img.src = url;
  });
};
