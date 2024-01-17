import cl from 'classnames';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ResultSliderImgSrcArr } from '../../_mockData/ResultPreviewSliderData';
import { ArrowInCircleIcon } from '../ui/icons';
import s from './ResultPreviewSection.module.scss';
import LapTop from './svg/laptop.svg?svgr';

interface IResultPreviewSectionProps {
  className?: string;
}

export const ResultPreviewSection: FC<IResultPreviewSectionProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = ResultSliderImgSrcArr.length;

  const handleLeftClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleRightClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <section className={cl(s.section, className)}>
      <h2 className={s.sectionTitle}>Результат</h2>
      <div className={s.slider}>
        <LapTop className={s.laptop} />

        <ul className={s.slides}>
          {Array.from({ length: 5 }).map((_, index) => {
            const slideIndex = (currentSlide + index + totalSlides) % totalSlides;
            return (
              <li key={uuidv4()} className={cl(s.slide, s[`slide_${index}`])}>
                <img className={s.slideImg} src={ResultSliderImgSrcArr[slideIndex]} alt="Превью" />
              </li>
            );
          })}
        </ul>

        <button className={cl(s.btn, s.btnLeft)} type="button" onClick={handleLeftClick}>
          <ArrowInCircleIcon className={cl(s.btnIcon, s.btnIconLeft)} />
        </button>

        <button className={cl(s.btn, s.btnRight)} type="button" onClick={handleRightClick}>
          <ArrowInCircleIcon className={cl(s.btnIcon)} />
        </button>
      </div>
    </section>
  );
};
