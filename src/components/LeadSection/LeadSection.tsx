import { FC } from 'react';
import cl from 'classnames';
import s from './LeadSection.module.scss';

export interface ILeadSectionProps {
  className?: string;
}

export const LeadSection: FC<ILeadSectionProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.lead, className)}>
      <p className={cl(s.info)}>
        Текст о компетенции, можно тот же, что и на главной странице раскрывается, 100-150 знаков,
        что‑то типа подзаголовка
      </p>
      <div className={cl(s.description)}>
        <p>
          Уже нормальный текст, объясняющий, что это за зверь такой и с чем его едят. Если его,
          конечно, можно сформулировать и написать так, чтобы было понятно.
        </p>
        <p>
          2–3, может быть 4 абзаца по 150-200 знаков, чтобы это можно было легко и быстро воспринять
          и понять, о чем речь. Пытаться казаться более знающими, чем есть на самом деле, за счёт
          использования умных слов точно не стоит.
        </p>
        <p>
          Можно добавить ещё блоки-пунктики с какими‑нибудь цифрами «улучшатели показателей» и вот
          это вот всё, как на главной странице на экране мастерской.
        </p>
      </div>
      <div className={cl(s.cards)}>
        <div className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardBigTitle)}>78</p>
            <p className={cl(s.cardTitle)}>%</p>
          </div>
          <p className={cl(s.cardText)}>Рост чего‑нибудь при&nbsp;использовании этой штуки</p>
        </div>

        <div className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardBigTitle)}>7</p>
            <p className={cl(s.cardTitle)}>месяцев</p>
          </div>
          <p className={cl(s.cardText)}>Требуется для полноценного внедрения бла-бла-бла</p>
        </div>

        <div className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardBigTitle)}>5</p>
            <p className={cl(s.cardTitle)}>лет</p>
          </div>
          <p className={cl(s.cardText)}>Пунктов может быть и больше, если текста много</p>
        </div>

        <div className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardBigTitle)}>15</p>
            <p className={cl(s.cardTitle)}>специалистов</p>
          </div>
          <p className={cl(s.cardText)}>Участвовали в разработке и тестировании</p>
        </div>

        <div className={cl(s.card)}>
          <div className={cl(s.cardHeader)}>
            <p className={cl(s.cardBigTitle)}>Сайт</p>
          </div>
          <p className={cl(s.cardText)}>Запущен и его можно посмотреть по ссылке</p>
        </div>
      </div>
    </section>
  );
};
