import {InternalData} from 'interface/internalData';
import styles from './ServicesPrice.module.scss';

export interface ServicesPrice extends Pick<InternalData, 'price' | 'time' | 'services'> {
}

export const ServicesPrice = ({price: {...price}, time: {...time}, services: {...services}}: ServicesPrice) => (

    <div className={styles.templatesName}>
        <div className={styles.titleStyle}>ПОСЛУГИ</div>

        <div className={styles.generalBox}>
            <div className={styles.priceBox}>
                <div className={styles.timeStyle}>{time.time60}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle1}>{services.haircut}</div>
                    <div>{price.classicHaircut}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time60}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle2}>{services.shortHaircut}</div>
                    <div>{price.shortHaircut}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time60}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle2}>{services.haircutLong}</div>
                    <div>{price.longHaircut}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time120}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle3}>{services.haircutFatherSon}</div>
                    <div>{price.fatherAndSon}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time30}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle4}>{services.beard}</div>
                    <div>{price.beard}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time90}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle5}>{services.haircutBeard}</div>
                    <div>{price.haircutBeard}</div>
                </div>
            </div>

            <div>
                <div className={styles.timeStyle}>{time.time60}</div>
                <div className={styles.servicesStyle}>
                    <div className={styles.servicesHaircutStyle6}>{services.haircutChildren}</div>
                    <div>{price.childrensHaircut}</div>
                </div>
            </div>

        </div>

    </div>
);

