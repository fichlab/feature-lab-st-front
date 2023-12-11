import React from 'react';
import s from './PopupContact.module.scss';
import Overlay from '../Overlay/Overlay';
import FormContact from './FormContact/FormContact';

type IPopupProps = {
  title?: string;
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: React.FC<IPopupProps> = ({ title = '', onClose, isOpen }) => {
  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <h2 className={s.popupTitle}>{title}</h2>
      <button className={s.closeButton} type="button" aria-label="Close popup" onClick={onClose} />
      <FormContact />
    </Overlay>
  ) : (
    <div />
  );
};
