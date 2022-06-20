import {NavLink} from 'react-router-dom';
import styles from './Menu..module.scss';

import {Menu, MenuItem} from '@mui/material';


export const MenuComponent = () => {
    const checkActiveLink = ({isActive}: { isActive: boolean }) => isActive ? styles.activeMenuLink : styles.menuLink

    return <nav className={styles.nav}>
        <ul className={styles.menu}>
            <li className={styles.menuList}>
                <NavLink to="/" className={checkActiveLink}>Home</NavLink>
            </li>
            <li className={styles.menuList}>
                <NavLink to="/chat" className={checkActiveLink}>Chat</NavLink>
            </li>
            <li className={styles.menuList}>
                <NavLink to="/login" className={checkActiveLink}>Login</NavLink>
            </li>
        </ul>
        <Menu
            id="basic-menu"
            open
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </nav>
}