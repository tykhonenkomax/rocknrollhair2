import {ServicesPrice} from 'components/ServicesPrice/ServicesPrice';
import {TitlePage} from 'components/TitlePage/TitlePage';
import {UsefulInformation} from 'components/UsefulInformation/UsefulInformation'
import {InternalData} from 'interface/internalData';


import styles from './Layout.module.scss';

export interface Layout extends InternalData {
}

export const Layout = ({information, price, time, services}: Layout) => (
    <div className={styles.templatesName}>
        <TitlePage/>
        <UsefulInformation information={information}/>
        <ServicesPrice price={price} time={time} services={services}/>
    </div>
);

