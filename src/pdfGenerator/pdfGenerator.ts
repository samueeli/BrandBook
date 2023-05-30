import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = (): void => {
  const pages = document.querySelectorAll('.pdf-page');

  const promises = Array.from(pages).map((page) => {
    const pageElement = page as HTMLElement;
    return html2canvas(pageElement, { useCORS: true })
      .then((canvas) => {
        return {
          image: canvas.toDataURL('image/png'),
          width: pageElement.offsetWidth,
          height: pageElement.offsetHeight,
        };
      })
      .catch((error) => {
        console.error('Error generating image:', error);
        throw error;
      });
  });

  Promise.all(promises)
    .then((images) => {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [images[0].width, images[0].height],
      });

      images.forEach((image, index) => {
        if (index !== 0) {
          pdf.addPage();
        }

        pdf.addImage(image.image, 'PNG', 0, 0, image.width, image.height);
      });

      pdf.save('brandbook.pdf');
    })
    .catch((error) => {
      console.error('Error generating PDF:', error);
    });
};
