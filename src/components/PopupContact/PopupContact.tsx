import React from 'react';
import s from './PopupContact.module.scss';
import Overlay from '../Overlay/Overlay';

type IPopupProps = {
  header?: string;
  onClose: () => void;
  isOpen: boolean;
};

export const PopupContact: React.FC<IPopupProps> = ({ header = '', onClose, isOpen }) => {
  return isOpen ? (
    <Overlay onClose={onClose} isOpen={isOpen}>
      <h2 className={s.popupTitle}>{header}</h2>
    </Overlay>
  ) : (
    <div />
  );
};
