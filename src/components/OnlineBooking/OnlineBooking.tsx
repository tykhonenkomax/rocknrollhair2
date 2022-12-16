import { InternalData } from 'interface/internalData';
import styles from './OnlineBooking.module.scss';

export interface OnlineBooking extends Pick<InternalData, 'links'> {
}

export const OnlineBooking = ({links:{onlineBookingLink}}: OnlineBooking) => (
    <div className={styles.templatesName}>
        <a className={styles.button} href={onlineBookingLink}>Онлайн запис</a>
    </div>
);

