import './TextInput.css';

export interface TextInputProps {
  title?: string;
  helper?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  title,
  helper,
  name,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <div className="TextInput_container">
      <h4>
        <b>{title}</b>
      </h4>
      <input type="text" onChange={onChange} value={value} name={name} />
      <small>{helper}</small>
    </div>
  );
};
