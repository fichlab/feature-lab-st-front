import cl from 'classnames';
import s from './Button.module.scss';
import Spinner from './svg/Icon-SpinnerGap.svg?svgr';

export interface IButtonProps {
  className?: string;
  onClick?: () => void;
  theme: 'promo' | 'white' | 'blue';
  text?: string;
  isLoading?: boolean;
}

export const Button = ({
  className = '',
  onClick = () => {},
  theme,
  text = '',
  isLoading = false,
}: IButtonProps): JSX.Element => {
  return (
    <>
      {theme === 'promo' && (
        <button onClick={onClick} type="button" className={cl(s.btn, s.promo, className)}>
          <div className={s.disk_out}>
            <div className={s.disk_in}>
              {!isLoading ? (
                <p className={s.promoText}>{text}</p>
              ) : (
                <Spinner className={cl(s.spinner)} />
              )}
            </div>
          </div>
        </button>
      )}
      {(theme === 'white' || theme === 'blue') && (
        <div className={cl(s.btn, s.radiant, className)}>
          <div className={s.gradient}>
            <button
              onClick={onClick}
              type="button"
              className={cl(s.disk, {
                [s.disk_white]: theme === 'white',
                [s.disk_blue]: theme === 'blue',
              })}>
              {!isLoading ? (
                <p
                  className={cl(s.text, {
                    [s.text_blue]: theme === 'white',
                    [s.text_white]: theme === 'blue',
                  })}>
                  {text}
                </p>
              ) : (
                <Spinner
                  className={cl(s.spinner, {
                    [s.spinner_blue]: theme === 'white',
                  })}
                />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
