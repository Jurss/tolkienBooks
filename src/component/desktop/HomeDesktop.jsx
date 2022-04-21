import React from 'react'
import Carousel from './Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../css/homeDesktop.module.css';

const HomeDesktop = () => {
  return (
    <div id={styles.mainContainer}>
        <header id={styles.header}>
            
        </header>
        <Carousel />
    </div>
  )
}

export default HomeDesktop