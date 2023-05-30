import { useState } from 'react';
import { TextArea } from '../../components/TextArea';
import { TextInput } from '../../components/TextInput';
import './UserFormView.css';

export interface FormProps {
  formValues: {
    [key: string]: string;
  };
  onFormChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  clearForm: () => void;
}

export const UserFormView = ({
  formValues,
  onFormChange,
  clearForm,
}: FormProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`UserFormView_container ${!open && 'closed'}`}>
      <div onClick={toggleOpen} className="UserFormView_menuBtn">
        <div className="menuline menuline1"></div>
        <div className="menuline"></div>
      </div>
      <div className="UserFormView_header">
        <h1>Your BrandBook Content</h1>
        <p>
          This simple brand book template is divided into two basic layouts:
          Title page and Content page. For the title page you can add text
          description under the title and for the content page you can add your
          image URLs to display your brand.
        </p>
        <p>
          Tip! Make all your images the same size/ratio to make it as easy as
          possible for you to use the BrandBook. You can resize your browser
          window to get the dimensions you like. Hit the download button to
          download your BrandBook as pdf.
        </p>
        <p>
          <i>
            If your font or images are not displaying, make sure you have
            entered a valid URL that points to an actual font/image file. The
            file needs to be publicly accessible.
          </i>
        </p>
      </div>
      <h2>General information</h2>
      <TextInput
        title="Logo"
        helper="Add a valid URL to your logo"
        name="logo"
        value={formValues.logo}
        onChange={onFormChange}
      />
      <TextInput
        title="Color"
        helper="Add your brand color (e.g. #c4967b)"
        name="brandColor"
        value={formValues.brandColor}
        onChange={onFormChange}
      />
      <TextInput
        title="Font"
        helper="Add a valid URL to your font (e.g. https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojIWmb2RjV9Su1cai.woff2)"
        name="font"
        value={formValues.font}
        onChange={onFormChange}
      />
      <hr />
      <h2>Brand</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="brandDesc"
        value={formValues.brandDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="brandCont"
        value={formValues.brandCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Logo</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="logoDesc"
        value={formValues.logoDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="logoCont"
        value={formValues.logoCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Typography</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="typoDesc"
        value={formValues.typoDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="typoCont"
        value={formValues.typoCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Colors</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="colorDesc"
        value={formValues.colorDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="colorCont"
        value={formValues.colorCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Icons</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="iconDesc"
        value={formValues.iconDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="iconCont"
        value={formValues.iconCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Photography</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="photoDesc"
        value={formValues.photoDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="photoCont"
        value={formValues.photoCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Web</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="webDesc"
        value={formValues.webDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="webCont"
        value={formValues.webCont}
        onChange={onFormChange}
      />
      <hr />
      <h2>Stationary</h2>
      <TextArea
        title="Description"
        helper="You can write some text here. It will appear as a paragraph under the title"
        name="statioDesc"
        value={formValues.statioDesc}
        onChange={onFormChange}
      />
      <TextInput
        title="Image"
        helper="Add valid URL to your content image"
        name="statioCont"
        value={formValues.statioCont}
        onChange={onFormChange}
      />
      <hr />
      <div onClick={clearForm} className="UserFormView_clearBtn">
        CLEAR ALL FIELDS
      </div>
    </div>
  );
};
