import styles from './TitlePage.module.scss';

export interface TitlePage {
}

export const TitlePage = ({}: TitlePage) => (
    <div className={styles.templatesName}>
        <img className={styles.logo} src={require('assets/logo.png')} alt='logo'/>
    </div>
);

