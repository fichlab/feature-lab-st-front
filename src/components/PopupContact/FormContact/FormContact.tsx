import cl from 'classnames';
import React from 'react';
import s from './FormContact.module.scss';
import { Button } from '../../ui/Button/Button';

type IFormProps = {
  // onSubmit: () => void;
  // buttonText: string;
  // value: string;
  // handleChange: () => void;
  // error: string;
  // isChecked: boolean;
  // onChange: () => void;
};

export const FormContact: React.FC<IFormProps> = ({
  onSubmit,
  buttonText,
  value,
  handleChange,
  error,
  isChecked,
  onChange,
}) => {
  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <span className={s.textNumber}>01</span>
            <input
              className={s.input}
              aria-label="Input name"
              value={value}
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Имя"
              minLength={2}
              maxLength={60}
              required
            />
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: error })}>{error}</span>
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <span className={s.textNumber}>02</span>
            <input
              className={s.input}
              aria-label="Input email"
              value={value}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email / телефон"
              minLength={6}
              maxLength={60}
              required
            />
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: error })}>{error}</span>
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <span className={s.textNumber}>03</span>
            <input
              className={s.input}
              aria-label="Input project"
              value={value}
              onChange={handleChange}
              name="project"
              type="text"
              placeholder="О вашем проекте"
              minLength={15}
              maxLength={500}
              required
            />
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: error })}>{error}</span>
        </div>
      </fieldset>
      <label className={s.checkboxContainer} htmlFor="checkboxConfidential">
        <input
          className={s.checkbox}
          id="checkboxConfidential"
          aria-label="Checkbox confidential"
          name="checkboxConfidential"
          type="checkbox"
          checked={isChecked}
        />
        <span className={s.checkboxText}>
          Соглашаюсь с обработкой персональных данных <br />и{' '}
          <span className={s.checkboxTextConfidential}>политикой конфиденциальности</span>
        </span>
      </label>
      <Button className={s.button} theme="white" />
    </form>
  );
};

export default FormContact;
