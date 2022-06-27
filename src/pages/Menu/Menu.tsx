import {NavLink} from 'react-router-dom';
import styles from './Menu..module.scss';
import {MenuItem, Typography} from '@mui/material';
import {useAppSelector} from '../../core/utils/hooks/useAppDispatch';

export const Menu = () => {
    const [isLogged] = useAppSelector(({auth}) => [auth.isLogged]);

    const checkActiveLink = ({isActive}: { isActive: boolean }) => isActive ? styles.activeMenuLink : styles.menuLink;
    let pages = [{text: 'Home', url: '/'}, {text: 'Chat', url: 'chat'}, {text: 'Login', url: 'login'}];

    if (isLogged) pages = [{text: 'Home', url: '/'}, {text: 'Chat', url: 'chat'}, {text: 'Users', url: 'users'}];

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