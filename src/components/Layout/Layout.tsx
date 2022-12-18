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
    <div className={styles.templatesName}>
        <TitlePage/>
        <UsefulInformation information={information} links={links}/>
        <Carousel responsive={responsive}>
            <div><img className={styles.carouselItem} src={require('assets/titlepage.jpeg')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/onlinebooking.png')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/onlinebooking.png')}/></div>
            <div><img className={styles.carouselItem} src={require('assets/onlinebooking.png')}/></div>
        </Carousel>
        <Price price={price} services={services} time={time}/>
        <OnlineBooking links={links}/>
    </div>
);

