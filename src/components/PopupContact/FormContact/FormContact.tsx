import React from 'react';
import s from './FormContact.module.scss';

type IFormProps = {
  // onSubmit: () => void;
  // buttonText: string;
  // value: string;
  // handleChange: () => void;
};

export const FormContact: React.FC<IFormProps> = ({
  onSubmit,
  buttonText,
  value,
  handleChange,
}) => {
  return (
    <form className={s.form} method="POST" onSubmit={onSubmit}>
      <fieldset className={s.formFieldset}>
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
        </div>
      </fieldset>
      <button className={s.formButton} type="submit">
        {buttonText || 'text'}
      </button>
    </form>
  );
};

export default FormContact;
