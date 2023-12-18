import cl from 'classnames';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../ui/Button/Button';
import s from './LabSection.module.scss';

export interface ILabSectionProps {
  className?: string;
}

export const LabSection: FC<ILabSectionProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  const handleOnBtnClick = () => {
    navigate('/');
  };

  return (
    <section className={cl(s.labSection, className)}>
      <h2 className={s.sectionTitle}>Ed-tech</h2>

      <div className={s.sectionContent}>
        <ul className={s.list}>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_1)} key={uuidv4()}>
            <p className={s.cardNumber}>0.1</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_2)} key={uuidv4()}>
            <p className={s.cardNumber}>0.2</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_3)} key={uuidv4()}>
            <p className={s.cardNumber}>0.3</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_4)} key={uuidv4()}>
            <p className={s.cardNumber}>0.4</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_5)} key={uuidv4()}>
            <p className={s.cardNumber}>0.5</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
          <li className={cl(s.card, s.cardPosition, s.cardPosition_6)} key={uuidv4()}>
            <p className={s.cardNumber}>0.6</p>
            <p className={s.cardText}>Плюсики обучения, объяснение, зачем это вообще людям надо</p>
          </li>
        </ul>
        <Button
          theme="white"
          text="Лаборатория"
          className={cl(s.labButton)}
          onClick={handleOnBtnClick}
        />
      </div>
    </section>
  );
};
