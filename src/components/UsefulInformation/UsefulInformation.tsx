import {InternalData} from 'interface/internalData';

import styles from './UsefulInformation.module.scss';
import {CiClock2, CiLocationArrow1, CiPhone} from "react-icons/ci"

export interface UsefulInformation extends Pick<InternalData, 'information' | 'links'> {
}

export const UsefulInformation = ({information: {location, phoneNumber, workingHours}, links: {gogleLink}}: UsefulInformation) => (

    <div className={styles.info}>
        <div className={styles.infoBox}>

            <div className={styles.iconBox}>
                <CiLocationArrow1 size={40}/>
            </div>
            <div>{location}</div>
            <a href={gogleLink}>переглянути на карті</a>
        </div>

        <div className={styles.line}></div>

        <div className={styles.infoBox}>
            <div className={styles.iconBox}>
                <CiClock2 size={40}/>
            </div>
            <div>{workingHours}</div>
            <div>без вихідних</div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.infoBox}>
            <div className={styles.iconBox}>
                <CiPhone size={40}/>
            </div>
            <div>{phoneNumber}</div>
            <a href="tel:0676714046">зателефонувати</a>
        </div>
    </div>

);

