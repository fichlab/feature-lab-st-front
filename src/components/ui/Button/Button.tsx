import cl from 'classnames';
import s from './Button.module.scss';

export interface IButtonProps {
  className?: string;
  onClick?: () => void;
  theme?: 'blue' | 'white' | 'default';
}

export const Button = ({
  className = '',
  onClick = () => {},
  theme = 'default',
}: IButtonProps): JSX.Element => {
  return (
    <>
      {theme === 'default' && (
        <button onClick={onClick} type="button" className={cl(s.btn, s.default, className)}>
          <div className={s.default_ellipse_out}>
            <div className={s.default_ellipse_in}>
              <p className={s.default_text}>Свяжитесь с нами</p>
            </div>
          </div>
        </button>
      )}
      {theme === 'white' && (
        <div className={cl(s.btn, s.white, className)}>
          <div className={s.white_ellipse_out}>
            <button onClick={onClick} type="button" className={s.white_ellipse_in}>
              <p className={s.white_text}>Отправить </p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
