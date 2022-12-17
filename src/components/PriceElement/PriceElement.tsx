import {InternalData} from 'interface';
import styles from './PriceElement.module.scss';

export interface PriceElement extends Pick<InternalData, 'price' | 'services' | 'time'> {
}

export const PriceElement = ({price, services, time}: PriceElement) => (

    <div className={styles.templatesName}>

        <div>
            <div>  {services.haircut} | <span className={styles.time}>{time.time60}</span> </div>
            <br/>
            <div> {services.shortHaircut} | <span className={styles.time}>{time.time60}</span></div>
            <br/>
            <div>{services.haircutLong} | <span className={styles.time}>{time.time60}</span></div>
            <br/>
            <div>{services.haircutFatherSon} | <span className={styles.time}>{time.time120}</span></div>
            <br/>
            <div>{services.beard} | <span className={styles.time}>{time.time30}</span></div>
            <br/>
            <div>{services.haircutBeard} | <span className={styles.time}>{time.time90}</span></div>
            <br/>
        </div>
        <div>
            <div>{price.classicHaircut}</div>
            <br/>
            <div>{price.shortHaircut}</div>
            <br/>
            <div>{price.longHaircut}</div>
            <br/>
            <div>{price.fatherAndSon}</div>
            <br/>
            <div>{price.beard}</div>
            <br/>
            <div>{price.haircutBeard}</div>
        </div>

    </div>
);

