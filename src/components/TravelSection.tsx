import { useState } from 'react';

import travelItem01 from '../assets/travel-item-01.png';
import travelItem02 from '../assets/travel-item-02.png';
import travelItem03 from '../assets/travel-item-03.png';
import chevronLeft from '../assets/chevron-left.svg';
import chevronRight from '../assets/chevron-right.svg';

import styles from './TravelSection.module.css';

interface TravelOption {
  departure: string;
  destination: string;
  type: string;
  price: number;
  image: string;
  link: string;
}

const travelOptions: TravelOption[] = [
  {
    departure: '서울/인천',
    destination: '두바이',
    type: '일반석 왕복',
    price: 1121600,
    image: travelItem01,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasList?TOURTYP=KALPAK&PKGBRA=KP&PKGARE=E5&REGNB1=%uC720%uB7FD&REGNB2=%uC911%uB3D9&REGTOP=1'
  },
  {
    departure: '서울/인천',
    destination: '바르셀로나',
    type: '일반석 왕복',
    price: 1515200,
    image: travelItem02,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP44129'
  },
  {
    departure: '서울/인천',
    destination: '로마',
    type: '일반석 왕복',
    price: 1415800,
    image: travelItem03,
    link: 'https://koreanairkp.kaltour.com/ProductOverseas/OverseasView?pkgpnh=KP41216'
  }
];

const TravelSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelOptions.length);
  };

  const prevTravel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + travelOptions.length) % travelOptions.length);
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={styles.travelSection}>
      <h2 className={`${styles.travelSectionTitle} heading-2-text`}>지금 떠나기 좋은 여행</h2>
      <button className={`${styles.navButton} ${styles.navButtonPrev}`} onClick={prevTravel}>
        <img src={chevronLeft} className={styles.navButtonIcon} />
      </button>
      <section className={styles.carousel}>
        {travelOptions.map((option, index) => (
          <article
            key={index}
            className={`${styles.card} ${index === currentIndex ? styles.cardActive : ''}`}
            onClick={() => handleCardClick(option.link)}
          >
            <img src={option.image} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={`${styles.cardTitle} heading-3-text`}>
                {option.departure} - {option.destination}
              </h3>
              <p className={`${styles.cardType} body-text`}>{option.type}</p>
              <p className={`${styles.cardPrice} body-text`}>KRW {option.price.toLocaleString()}</p>
            </div>
          </article>
        ))}
      </section>
      <button className={`${styles.navButton} ${styles.navButtonNext}`} onClick={nextTravel}>
        <img src={chevronRight} className={styles.navButtonIcon} />
      </button>
    </section>
  );
};

export default TravelSection;