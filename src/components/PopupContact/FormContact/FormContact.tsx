import cl from 'classnames';
import React, { ChangeEvent, FormEvent, useRef } from 'react';
import s from './FormContact.module.scss';
import { Button } from '../../ui/Button/Button';
import { emailRegEx, nameRegEx } from '../../../constants/constants';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  // buttonText: string;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  // isChecked: boolean;
  // onChange: () => void;S
  isValid: boolean | undefined;
};

export const FormContact: React.FC<IFormProps> = ({
  onSubmit,
  buttonText,
  values,
  handleChange,
  errors,
  isChecked,
  onChange,
  isValid,
}) => {
  const originalFontSize = useRef<string>();
  const originalTextareaHeight = useRef<string>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    originalFontSize.current = originalFontSize.current || e.target.style.fontSize;
    const textLength = e.target.value?.length;
    e.target.style.fontSize =
      textLength > 20 ? `${80 - (textLength - 20)}px` : originalFontSize.current;

    handleChange(e);
  };

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    originalTextareaHeight.current = originalTextareaHeight.current || `${e.target.clientHeight}px`;
    const textLength = e.target.value?.length;
    e.target.style.height =
      textLength > 20 ? `${e.target.scrollHeight}px` : originalTextareaHeight.current;

    handleChange(e);
  };

  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <fieldset className={s.fieldset}>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              aria-label="Input name"
              value={values.name}
              onChange={onInputChange}
              name="name"
              type="text"
              placeholder="Имя"
              minLength={2}
              maxLength={60}
              pattern={nameRegEx}
              required
            />{' '}
            <div className={s.textContainer}>
              <span className={s.textNumber}>01</span>
              <span className={s.textClue}>Имя</span>
            </div>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.name })}>
            {errors.name}
          </span>
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              aria-label="Input email"
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="email"
              placeholder="Email / телефон"
              minLength={6}
              maxLength={60}
              pattern={emailRegEx}
              required
            />
            <div className={s.textContainer}>
              <span className={s.textNumber}>02</span>
              <span className={s.textClue}>Email/телефон</span>
            </div>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.email })}>
            {errors.email}
          </span>
        </div>
        <div className={s.contact}>
          <div className={s.inputContainer}>
            <textarea
              className={s.input}
              aria-label="Input project"
              value={values.project}
              onChange={onTextareaChange}
              name="project"
              placeholder="О вашем проекте"
              minLength={15}
              maxLength={500}
              rows={1}
              required
            />
            <div className={s.textContainer}>
              <span className={s.textNumber}>03</span>
              <span className={s.textClue}>О проекте</span>
            </div>
          </div>
          <span className={cl(s.inputError, { [s.inputErrorActive]: errors.project })}>
            {errors.project}
          </span>
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
