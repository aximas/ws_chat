import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {ProfileMenu} from './ProfileMenu';

export const Header = () => {
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <NavLink to='/' className={styles.homeUrl}>
                Mini social app
            </NavLink>
            <ul className={styles.navMenu}>
                <li>
                    <ProfileMenu />
                </li>
            </ul>
        </nav>
    </header>
}