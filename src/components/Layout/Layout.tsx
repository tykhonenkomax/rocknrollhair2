import { OnlineBooking } from 'components/OnlineBooking/OnlineBooking';
import { Price } from 'components/Price/Price';
import {TitlePage} from 'components/TitlePage/TitlePage';
import {UsefulInformation} from 'components/UsefulInformation/UsefulInformation'
import {InternalData} from 'interface/internalData';


import styles from './Layout.module.scss';

export interface Layout extends InternalData {
}

export const Layout = ({information, price, time, services, links}: Layout) => (
    <div className={styles.templatesName}>
        <TitlePage/>
        <UsefulInformation information={information} links={links}/>
        <Price price={price} services={services} time={time}/>
        <OnlineBooking links={links}/>
    </div>
);

