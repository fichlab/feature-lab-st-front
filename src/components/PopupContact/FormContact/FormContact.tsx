import cl from 'classnames';
import React, { ChangeEvent, FormEvent, useRef } from 'react';
import s from './FormContact.module.scss';
import { Button } from '../../ui/Button/Button';
import {
  EMAIL_REG_EX,
  MAX_LENGTH_EMAIL,
  MAX_LENGTH_NAME,
  MAX_LENGTH_PROJECT,
  MIN_LENGTH_EMAIL,
  MIN_LENGTH_NAME,
  MIN_LENGTH_PROJECT,
  NAME_REG_EX,
} from '../../../constants/constants';

type IFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  values: { [key: string]: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
  isValid: boolean | undefined;
  isLoading: boolean | undefined;
};

export const FormContact: React.FC<IFormProps> = ({
  onSubmit,
  values,
  handleChange,
  errors,
  isValid,
  isLoading,
}) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  const originalFontSize = useRef<string>();
  const originalTextareaHeight = useRef<string>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    originalFontSize.current = originalFontSize.current || e.target.style.fontSize;
    const textLength = e.target.value?.length;
    e.target.style.fontSize =
      textLength > 20 ? `${80 - (textLength - 20)}px` : originalFontSize.current;

    handleChange(e);
  };

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    originalTextareaHeight.current = originalTextareaHeight.current || `${e.target.clientHeight}px`;
    const textLength = e.target.value?.length;
    e.target.style.height =
      textLength > 20 ? `${e.target.scrollHeight}px` : originalTextareaHeight.current;

    handleChange(e);
  };

  const isEmpty = () => {
    return !values || !!Object.keys(values).filter((x: string) => !values[x]).length;
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
              minLength={MIN_LENGTH_NAME}
              maxLength={MAX_LENGTH_NAME}
              pattern={NAME_REG_EX}
              required
            />{' '}
            <div className={s.textContainer}>
              <span className={cl(s.textNumber, { [s.textNumberError]: errors.name })}>01</span>
              <span className={cl(s.textClue, { [s.textClueError]: errors.name })}>Имя</span>
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
              minLength={MIN_LENGTH_EMAIL}
              maxLength={MAX_LENGTH_EMAIL}
              pattern={EMAIL_REG_EX}
              required
            />
            <div className={s.textContainer}>
              <span className={cl(s.textNumber, { [s.textNumberError]: errors.email })}>02</span>
              <span className={cl(s.textClue, { [s.textClueError]: errors.email })}>
                Email / телефон
              </span>
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
              aria-label="Textarea project"
              value={values.project}
              onChange={onTextareaChange}
              name="project"
              placeholder="О вашем проекте"
              minLength={MIN_LENGTH_PROJECT}
              maxLength={MAX_LENGTH_PROJECT}
              rows={1}
              required
            />
            <div className={s.textContainer}>
              <span className={cl(s.textNumber, { [s.textNumberError]: errors.project })}>03</span>
              <span className={cl(s.textClue, { [s.textClueError]: errors.project })}>
                О проекте
              </span>
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
          onChange={onCheckboxClick}
        />
        <span className={s.checkboxText}>
          Соглашаюсь с обработкой персональных&nbsp;данных <br />и{' '}
          <span className={s.checkboxTextConfidential}>политикой конфиденциальности</span>
        </span>
      </label>
      <Button
        className={s.button}
        type="submit"
        theme="white"
        text="Отправить"
        disabled={!isValid || !isChecked || isEmpty()}
        isLoading={isLoading}
      />
    </form>
  );
};

export default FormContact;
