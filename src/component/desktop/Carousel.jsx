import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from '../css/carousel.module.css';
import hobbitTown from '../../assets/carouselImage/hobbitTown.jpg';
import hobbitHome from '../../assets/carouselImage/hobbitHome.jpg';
import middleEarthMap from '../../assets/carouselImage/middleEarthMap.jpg';

export default () => {
    let intervalz = 3000;
    let width = window.innerWidth
    return(
    <Carousel autoPlay
        infiniteLoop
        interval={intervalz} 
        width={width}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        transitionTime={600}
        >
        <div>
            <img className={styles.carouselImg} src={hobbitHome} />
        </div>
        <div>
            <img className={styles.carouselImg} src={hobbitTown} />
        </div>
        <div>
            <img className={styles.carouselImg} src={middleEarthMap} />
        </div>
    </Carousel>
    )
}