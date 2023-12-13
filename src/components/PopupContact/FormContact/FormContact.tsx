import cl from 'classnames';
import React from 'react';
import s from './FormContact.module.scss';
import { Button } from '../../ui/Button/Button';
import { emailRegEx, nameRegEx } from '../../../constants/constants';

type IFormProps = {
  onSubmit: () => void;
  // buttonText: string;
  // value: string;
  handleChange: () => void;
  errors: {};
  // isChecked: boolean;
  // onChange: () => void;
  isValid: boolean | undefined;
};

export const FormContact: React.FC<IFormProps> = ({
  onSubmit,
  buttonText,
  value,
  handleChange,
  errors,
  isChecked,
  onChange,
  isValid,
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
              pattern={nameRegEx}
              required
            />
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors })}>ahah</span>
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
              pattern={emailRegEx}
              required
            />
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors })}>ahah</span>
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
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors })}>ahah</span>
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
