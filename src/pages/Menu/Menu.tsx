import {Link} from 'react-router-dom';
import styles from './Menu..module.scss';

export const Menu = () => {
    return <nav className={styles.nav}>
        <ul className={styles.menu}>
            <li className={styles.menuList}>
                <Link to="/" className={styles.menuLink}>Home</Link>
            </li>
            <li className={styles.menuList}>
                <Link to="/messages" className={styles.menuLink}>Messages</Link>
            </li>
        </ul>
    </nav>
}