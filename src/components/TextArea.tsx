import './TextArea.css';

export interface TextAreaProps {
  title?: string;
  helper?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  title,
  helper,
  name,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <div className="TextArea_container">
      <h4>
        <b>{title}</b>
      </h4>
      <textarea onChange={onChange} value={value} name={name} />
      <small>{helper}</small>
    </div>
  );
};
