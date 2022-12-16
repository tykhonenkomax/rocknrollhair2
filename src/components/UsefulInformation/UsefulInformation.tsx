import styles from './UsefulInformation.module.scss';
import {CiClock2, CiLocationArrow1, CiPhone} from "react-icons/ci"
import {InternalData} from 'interface/internalData';

export interface UsefulInformation extends Pick<InternalData, 'information'> {
}

export const UsefulInformation = ({information: {location, phoneNumber, workingHours}}: UsefulInformation) => (
    <div className={styles.info}>
        <div className={styles.infoBox}>

            <div className={styles.iconBox}>
                <CiLocationArrow1 size={35}/>
            </div>
            <div>{location}</div>
            <a href="">переглянути на карті</a>
        </div>

        <div className={styles.infoBox}>
            <div className={styles.iconBox}>
                <CiClock2 size={35}/>
            </div>
            <div>{workingHours}</div>
            <div>без вихідних</div>
        </div>

        <div className={styles.infoBox}>
            <div className={styles.iconBox}>
                <CiPhone size={35}/>
            </div>
            <div>{phoneNumber}</div>
            <a href="">зателефонувати</a>
        </div>

    </div>
);

