import React, { FormEvent } from 'react';
import s from './PopupContact.module.scss';
import Overlay from '../Overlay/Overlay';
import { FormContact } from './FormContact/FormContact';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

type IPopupProps = {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: React.FC<IPopupProps> = ({ title = '', onClose, isOpen }) => {
  const { values, handleChange, errors, isValid } = useFormAndValidation({
    name: '',
    email: '',
    project: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!values.email || !values.password) {
    // }
  };

  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <h2 className={s.popupTitle}>{title}</h2>
      <button className={s.closeButton} type="button" aria-label="Close popup" onClick={onClose} />
      <FormContact
        handleChange={handleChange}
        onSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
        values={values}
      />
    </Overlay>
  ) : (
    <div />
  );
};
