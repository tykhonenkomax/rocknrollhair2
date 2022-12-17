import {PriceElement} from 'components/PriceElement/PriceElement';
import { InternalData } from 'interface/internalData';
import styles from './Price.module.scss';

export interface Price extends Pick<InternalData, 'price' | 'services' | 'time'> {
}

export const Price = ({price, time, services}: Price) => (
    <div className={styles.templatesName}>
        <div className={styles.price}>ПРАЙС</div>
        <PriceElement price={price} time={time} services={services} />
    </div>
);

