import styles from './TitlePage.module.scss';

export interface TitlePage {
}

export const TitlePage = ({}: TitlePage) => (
    <div className={styles.wrapper}>
    <img className={styles.logo} src={require('assets/logo.png')} alt='logo'/>
    <div className={styles.templatesName}>
    </div>

    </div>
);

