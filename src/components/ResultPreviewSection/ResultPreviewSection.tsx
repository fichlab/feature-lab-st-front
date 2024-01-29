import cl from 'classnames';
import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ResultSliderImgSrcArr } from '../../_mockData/ResultPreviewSliderData';
import brokenScreen from '../../assets/svg/broken_screen.svg';
import LapTop from '../../assets/svg/laptop.svg?svgr';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ArrowInCircleIcon, SpinnerIcon } from '../ui/icons';
import s from './ResultPreviewSection.module.scss';

interface IResultPreviewSectionProps {
  className?: string;
}

export const ResultPreviewSection: FC<IResultPreviewSectionProps> = ({ className = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);
  const [isImgLoadingSuccess, setIsImgLoadingSuccess] = useState(false);
  const [isImgLoadingErr, setIsImgLoadingErr] = useState(false);

  const totalSlides = ResultSliderImgSrcArr.length;

  const handleLeftClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleRightClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const loadAllImages = async () => {
      try {
        const promises = ResultSliderImgSrcArr.map((src) => loadImage(src));
        await Promise.all(promises);
        setIsImgLoading(false);
        setIsImgLoadingErr(false);
        setIsImgLoadingSuccess(true);
      } catch (error) {
        // error if at least one will not loaded
        setIsImgLoading(false);
        setIsImgLoadingErr(true);
        setIsImgLoadingSuccess(false);
      }
    };

    // Start preloading all images when the component mounts
    loadAllImages();
  }, []);

  return (
    <section className={cl(s.section, className)}>
      <SectionTitle text="Результат" />

      <div className={s.slider}>
        <LapTop className={s.laptop} />

        {isImgLoadingErr && (
          <ul className={s.slides}>
            <li key={uuidv4()} className={cl(s.slide, s.slide_2)}>
              <img className={s.slideImg} src={brokenScreen} alt="Превью" />
            </li>
          </ul>
        )}

        {isImgLoading && <SpinnerIcon className={cl(s.spinner)} theme="white" />}

        {isImgLoadingSuccess && (
          <ul className={s.slides}>
            {Array.from({ length: 5 }).map((_, index) => {
              const slideIndex = (currentSlide + index + totalSlides) % totalSlides;
              return (
                <li key={uuidv4()} className={cl(s.slide, s[`slide_${index}`])}>
                  <img
                    className={s.slideImg}
                    src={ResultSliderImgSrcArr[slideIndex]}
                    alt="Превью"
                  />
                </li>
              );
            })}
          </ul>
        )}

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
