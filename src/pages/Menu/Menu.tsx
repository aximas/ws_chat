import {NavLink} from 'react-router-dom';
import styles from './Menu..module.scss';
import {MenuItem, Typography} from '@mui/material';

export const Menu = () => {

    const checkActiveLink = ({isActive}: { isActive: boolean }) => isActive ? styles.activeMenuLink : styles.menuLink;
    const pages = [{text: 'Home', url: '/'}, {text: 'Chat', url: 'chat'}, {text: 'Login', url: 'login'}];

    return <nav className={styles.nav}>
        <ul className={styles.menu}>
            {pages.map((page) => (
                <MenuItem key={page.text}>
                    <NavLink to={page.url} className={checkActiveLink}>
                        {page.text}
                    </NavLink>
                </MenuItem>
            ))}
        </ul>

    </nav>
}