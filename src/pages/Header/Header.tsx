import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {ProfileMenu} from './ProfileMenu';
import {useAppDispatch, useAppSelector} from '../../core/utils/hooks/useAppDispatch';
import {authThunk} from '../../core/store/auth/auth.thunk';

export const Header = () => {
    const [isLogged] = useAppSelector(({auth}) => [auth.isLogged]);
    const dispatch = useAppDispatch();

    if (!isLogged) dispatch(authThunk());

    return <header className={styles.header}>
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.homeUrl}>
                Mini social app
            </NavLink>
            <ul className={styles.navMenu}>
                <li>
                    <ProfileMenu/>
                </li>
            </ul>
        </nav>
    </header>
}