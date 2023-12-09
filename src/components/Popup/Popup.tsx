import { FC, PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { Icon } from '../icon';
// import { Text } from '../text';
import s from './Popup.module.scss';
// import { Button } from '../button';
import Overlay from '../Overlay/Overlay';

const popupRoot = document.getElementById('popup-portal');

type TPopupProps = {
  header?: string;
  onClose: () => void;
  size?: string;
  // withBtnClose?: boolean;
};

export const Popup: FC<PropsWithChildren<TPopupProps>> = ({
  children = null,
  header = '',
  onClose,
  size,
  // withBtnClose = true,
}) => {
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  if (!popupRoot) return null;

  return ReactDOM.createPortal(
    <div className={s.modal}>
      <Overlay onClose={onClose} />
      <div className={s.modalContainer} style={{ width: `${size}px` }}>
        {/* {withBtnClose && (
          <Button
            mode="LinkBtn"
            size="small"
            iconTitle="closeWindow"
            onClick={onClose}
            className={s.modalClose}
          />
        )} */}
        {header && (
          <div className={s.modalHeader}>
            {/* <Text As="h3" size="head3">
              {header}
            </Text> */}
            {/* <button type="button">
              <Icon iconTitle="iconEditDeck" />
            </button> */}
          </div>
        )}
        {children}
      </div>
    </div>,
    popupRoot,
  );
};
