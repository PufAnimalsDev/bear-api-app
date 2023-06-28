import classNames from 'classnames';
import { useState } from 'react';

interface TextareaFieldProps {
  name: string;
  value: string;
  label?: string;
  required?: boolean;
  onChange?: (newValue: string) => void;
  validateUrl?: (value: string) => boolean;
  validateNameAndSurname?: (value: string) => boolean;
}

function getRandomDigits() {
  return Math.random().toString().slice(2);
}

export const TextareaField = (props: TextareaFieldProps) => {
  const {
    name,
    value,
    label = name,
    required = false,
    // eslint-disable-next-line
    onChange = () => {},
    validateUrl = () => true,
    validateNameAndSurname = () => true,
  } = props;
  const [id] = useState(() => `${name}-${getRandomDigits()}`);

  const [wasTouched, setWasTouched] = useState(false);
  const hasError = wasTouched && required && !value;

  return (
    <div className='field'>
      <label className='label' htmlFor={id}>
        {label}
      </label>
      <div className='control'>
        <textarea
          id={id}
          className={classNames('input textarea', {
            'is-danger': hasError,
          })}
          cols={10}
          rows={5}
          name={name}
          placeholder={`Enter ${label}`}
          value={value}
          onBlur={() => setWasTouched(true)}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>

      {hasError && <p className='help is-danger'>{`${label} is required`}</p>}

      {value && !validateUrl(value) && <p className='help is-danger'>{`${label} is incorrect`}</p>}

      {value && !validateNameAndSurname(value) && (
        <p className='help is-danger'>{`${label} should hve min 4 characters`}</p>
      )}
    </div>
  );
};
