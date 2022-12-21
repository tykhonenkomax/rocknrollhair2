import {InternalData} from 'interface';
import styles from './PriceElement.module.scss';

export interface PriceElement extends Pick<InternalData, 'price' | 'services' | 'time'> {
}

export const PriceElement = ({price, services, time}: PriceElement) => (

    <div className={styles.templatesName}>

        <div>
            <div className={styles.column}>  {services.haircut} <span className={styles.time}> | {time.time60}</span> </div>
            <br/>
            <div className={styles.column}> {services.shortHaircut}<span className={styles.time}> | {time.time60}</span></div>
            <br/>
            <div className={styles.column}>{services.haircutLong}<span className={styles.time}> | {time.time60}</span></div>
            <br/>
            <div className={styles.column}>{services.haircutFatherSon}<span className={styles.time}> | {time.time120}</span></div>
            <br/>
            <div className={styles.column}>{services.beard}<span className={styles.time}> | {time.time30}  </span></div>
            <br/>
            <div className={styles.column}>{services.haircutBeard}<span className={styles.time}> | {time.time90}</span></div>
            <br/>
        </div>
        <div>
            <div className={styles.price}>{price.classicHaircut}</div>
            <br/>
            <div className={styles.price}>{price.shortHaircut}</div>
            <br/>
            <div className={styles.price}>{price.longHaircut}</div>
            <br/>
            <div className={styles.price}>{price.fatherAndSon}</div>
            <br/>
            <div className={styles.price}>{price.beard}</div>
            <br/>
            <div className={styles.price}>{price.haircutBeard}</div>
        </div>

    </div>
);

