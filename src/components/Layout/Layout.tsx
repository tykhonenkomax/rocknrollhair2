import { OnlineBooking } from 'components/OnlineBooking/OnlineBooking';
import {ServicesPrice} from 'components/ServicesPrice/ServicesPrice';
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
        <ServicesPrice price={price} time={time} services={services} />
        <OnlineBooking links={links}/>
    </div>
);

