import cl from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import s from './LeadSectionCard.module.scss';

interface ILeadSectionCardProps {
  card: {
    titleBig: string;
    titleSmall?: string;
    text: string;
    url?: string;
  };
}

export const LeadSectionCard: FC<ILeadSectionCardProps> = ({ card }) => (
  <li className={cl(s.card)}>
    <div className={cl(s.cardHeader)}>
      {card.url ? (
        <Link to={card.url} className={cl(s.cardTitleBig, s.cardTitleBigLink)}>
          {card.titleBig}
        </Link>
      ) : (
        <p className={cl(s.cardTitleBig)}>{card.titleBig}</p>
      )}
      {card.titleSmall && <p className={cl(s.cardTitleSmall)}>{card.titleSmall}</p>}
    </div>
    <p className={cl(s.cardText)}>{card.text}</p>
  </li>
);
