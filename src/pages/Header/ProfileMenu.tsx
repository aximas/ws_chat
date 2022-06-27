import styles from './Header.module.scss';
import {useRef, useState} from 'react';
import {SvgIcon} from '../../components/MainComponents/SvgIcon/SvgIcon';
import {ReactComponent as UserIcon} from './../../assets/svg/user-profile.svg';
import {Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {useOnClickOutside} from '../../core/utils/hooks/useOnClickOutside';
import {useAppDispatch, useAppSelector} from '../../core/utils/hooks/useAppDispatch';
import {logoutThunk} from '../../core/store/auth/auth.thunks';


export const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLogged, isLoggedFromSite] = useAppSelector(({auth}) => [auth.isLogged, auth.isLoggedFromSite]);
    const dispatch = useAppDispatch();

    const ref = useRef(null);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }
    useOnClickOutside(ref, () => setIsOpen(false));

    const handleLogout = () => {
        if (isLogged || isLoggedFromSite) dispatch(logoutThunk());
    }

    const profileMenuLinks = [
        {name: 'Profile', link: '/profile'},
        {name: 'Friends', link: '/friends'},
    ]

    return <div className={styles.profileMenuWrapper} ref={ref}>
        <Button onClick={handleClick}>
            <SvgIcon Icon={UserIcon}/>
        </Button>
        <ul className={cn(styles.profileMenu, {[styles.active]: isOpen})}>
            {profileMenuLinks.map((menu, i) => {
                return <li key={i}>
                    <NavLink to={menu.link} onClick={() => setIsOpen(false)}>{menu.name}</NavLink>
                </li>
            })}
            <li>
                <button onClick={handleLogout} className={styles.logoutBtn}>Log out</button>
            </li>
        </ul>
    </div>
}