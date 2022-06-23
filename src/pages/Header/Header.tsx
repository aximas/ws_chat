import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import {ProfileMenu} from './ProfileMenu';
import {useAppDispatch, useAppSelector} from '../../core/utils/hooks/useAppDispatch';
import {authThunk} from '../../core/store/auth/auth.thunk';
import {useEffect} from 'react';

export const Header = () => {
    const [isLoggedFromSite] = useAppSelector(({auth}) => [auth.isLoggedFromSite]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isLoggedFromSite) dispatch(authThunk({isReqFromHeader: true}));
    }, [])

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