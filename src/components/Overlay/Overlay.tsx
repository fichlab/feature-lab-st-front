import cl from 'classnames';
import s from './Overlay.module.scss';

type IOverlayProps = {
  onClose: () => void;
};

const Overlay: React.FC<IOverlayProps> = ({ onClose }) => {
  return <div onClick={onClose} className={cl(s.overlay)} />;
};

export default Overlay;
