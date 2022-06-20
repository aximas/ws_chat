import styles from './Header.module.scss';
import {useRef, useState} from 'react';
import {SvgIcon} from '../../components/MainComponents/SvgIcon/SvgIcon';
import {ReactComponent as UserIcon} from './../../assets/svg/user-profile.svg';
import {Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {useOnClickOutside} from '../../core/utils/hooks/useOnClickOutside';


export const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef(null);

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    useOnClickOutside(ref, () => setIsOpen(false))

    return <div className={styles.profileMenuWrapper} ref={ref}>
        <Button onClick={handleClick}>
            <SvgIcon Icon={UserIcon}/>
        </Button>
        <ul className={cn(styles.profileMenu, {[styles.active]: isOpen})}>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/friends">Friends</NavLink>
            </li>
        </ul>
    </div>
}