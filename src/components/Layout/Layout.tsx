import {OnlineBooking} from 'components/OnlineBooking/OnlineBooking';
import {Price} from 'components/Price/Price';
import {responsive} from 'components/Swiper/Swiper';
import {TitlePage} from 'components/TitlePage/TitlePage';
import {UsefulInformation} from 'components/UsefulInformation/UsefulInformation'
import {InternalData} from 'interface/internalData';
import Carousel from 'react-multi-carousel';


import styles from './Layout.module.scss';

export interface Layout extends InternalData {
}

export const Layout = ({information, price, time, services, links}: Layout) => (
    <div className={styles.wrapper}>
    <div className={styles.templatesName}>
        <TitlePage/>
        <UsefulInformation information={information} links={links}/>
        <Carousel responsive={responsive} className={styles.carousel}>
            <div><img className={styles.carouselItem} src={require('assets/face2.jpg')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/chair.jpg')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/school.jpg')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/speeking.jpg')}/></div>
        </Carousel>
        <Price price={price} services={services} time={time}/>
        <OnlineBooking links={links}/>
    </div>
    </div>
);

