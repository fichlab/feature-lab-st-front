import React from 'react';
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
    email: '',
    password: '',
    project: '',
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // if (!values.email || !values.password) {
    // }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };

  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <h2 className={s.popupTitle}>{title}</h2>
      <button className={s.closeButton} type="button" aria-label="Close popup" onClick={onClose} />
      <FormContact
        handleChange={() => onInputChange}
        onSubmit={() => handleSubmit}
        errors={errors}
        isValid={isValid}
        values={values}
      />
    </Overlay>
  ) : (
    <div />
  );
};
