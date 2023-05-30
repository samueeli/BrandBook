import { useEffect, useState } from 'react';
import { CoverPageView } from './views/coverPage/CoverPageView';
import { BrandTitleView } from './views/brand/BrandTitleView';
import { BrandView } from './views/brand/BrandView';
import { ColorsTitleView } from './views/colors/ColorsTitleView';
import { ColorsView } from './views/colors/ColorsView';
import { ContentsTitleView } from './views/contents/ContentsTitleView';
import { ContentsView } from './views/contents/ContentsView';
import { IconsTitleView } from './views/icons/IconsTitleView';
import { IconsView } from './views/icons/IconsView';
import { LogoTitleView } from './views/logo/LogoTitleView';
import { LogoView } from './views/logo/LogoView';
import { PhotographyTitleView } from './views/photography/PhotographyTitleView';
import { PhotographyView } from './views/photography/PhotographyView';
import { TypographyTitleView } from './views/typography/TypographyTitleView';
import { TypographyView } from './views/typography/TypographyView';
import { WebTitleView } from './views/web/WebTitleView';
import { WebView } from './views/web/WebView';
import { loadFonts } from './hooks/loadFonts';
import { StationaryTitleView } from './views/stationary/StationaryTitleView';
import { StationaryView } from './views/stationary/StationaryView';
import { UserFormView } from './views/userForm/UserFormView';
import { ColorContext } from './contexts/ColorContext';
import { DownloadButton } from './components/DownloadButton';
import { generatePDF } from './pdfGenerator/pdfGenerator';

import './App.css';

// TODO: Print button goes to the top right corner

function App() {
  const initialState = {
    logo: '',
    brandColor: '',
    font: '',
    brandDesc: '',
    brandCont: '',
    logoDesc: '',
    logoCont: '',
    typoDesc: '',
    typoCont: '',
    colorDesc: '',
    colorCont: '',
    iconDesc: '',
    iconCont: '',
    photoDesc: '',
    photoCont: '',
    webDesc: '',
    webCont: '',
    statioDesc: '',
    statioCont: '',
  };

  const [formValues, setFormValues] = useState(initialState);
  const dummyImg =
    'https://raw.githubusercontent.com/samueeli/BrandBook/main/src/assets/wireframe.jpg';

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => {
      const newFormValues = {
        ...prevValues,
        [name]: value,
      };
      localStorage.setItem('formValues', JSON.stringify(newFormValues));
      return newFormValues;
    });
  };

  const handleClearForm = () => {
    console.log('samulin form cleared');
    localStorage.removeItem('formValues');
    setFormValues(initialState);
  };

  // Load font
  useEffect(() => {
    if (formValues.font !== '') {
      loadFonts(formValues.font);
    } else {
      loadFonts(
        'https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojIWmb2RjV9Su1cai.woff2'
      );
    }
  }, [formValues.font]);

  // Get saved form from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem('formValues');
    savedForm && setFormValues(JSON.parse(savedForm));
  }, []);

  const handleDownloadPdf = () => {
    console.log('downloaded PDF');
    generatePDF();
  };

  return (
    <ColorContext.Provider
      value={formValues.brandColor === '' ? '#c4967b' : formValues.brandColor}
    >
      <div style={{ fontFamily: 'customFont, sans-serif' }}>
        <UserFormView
          formValues={formValues}
          onFormChange={handleFormChange}
          clearForm={handleClearForm}
        />
        <div
          style={{
            position: 'fixed',
            zIndex: '100',
            right: '1.8rem',
            top: '1.8rem',
          }}
        >
          <DownloadButton onClick={handleDownloadPdf} />
        </div>
        <CoverPageView logo={formValues.logo} />
        <ContentsTitleView />
        <ContentsView />
        <BrandTitleView description={formValues.brandDesc} />
        <BrandView
          image={formValues.brandCont === '' ? dummyImg : formValues.brandCont}
        />
        <LogoTitleView description={formValues.logoDesc} />
        <LogoView
          image={formValues.logoCont === '' ? dummyImg : formValues.logoCont}
        />
        <TypographyTitleView description={formValues.typoDesc} />
        <TypographyView
          image={formValues.typoCont === '' ? dummyImg : formValues.typoCont}
        />
        <ColorsTitleView description={formValues.colorDesc} />
        <ColorsView
          image={formValues.colorCont === '' ? dummyImg : formValues.colorCont}
        />
        <IconsTitleView description={formValues.iconDesc} />
        <IconsView
          image={formValues.iconCont === '' ? dummyImg : formValues.iconCont}
        />
        <PhotographyTitleView description={formValues.photoDesc} />
        <PhotographyView
          image={formValues.photoCont === '' ? dummyImg : formValues.photoCont}
        />
        <WebTitleView description={formValues.webDesc} />
        <WebView
          image={formValues.webCont === '' ? dummyImg : formValues.webCont}
        />
        <StationaryTitleView description={formValues.statioDesc} />
        <StationaryView
          image={
            formValues.statioCont === '' ? dummyImg : formValues.statioCont
          }
        />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
