import {User} from "./Users.props";
import React from "react";
import styles from './Users.module.scss';
import {ReactComponent as UserIcon} from "./../../assets/svg/user-profile.svg";
import {SvgIcon} from "../../components/MainComponents/SvgIcon/SvgIcon";
import {ReactComponent as UserFollowed} from '../../assets/svg/user-following-svgrepo-com.svg';
import {ReactComponent as UserFollow} from './../../assets/svg/user-follow-svgrepo-com.svg';
import {useAppDispatch} from "../../core/utils/hooks/useAppDispatch";
import {userFollowThunk} from "../../core/store/users/users.thunks";


export const UserComponent: React.FC<User[] | any> = ({users}) => {
    const dispatch = useAppDispatch();

    const followHandle = (userId) => {
        dispatch(userFollowThunk({queryParams: '', userId, followToggle: 'follow'}));
    }

    const unFollowHandle = (userId) => {
        dispatch(userFollowThunk({queryParams: '', userId, followToggle: "unFollow"}));
    }

    return users.map(user => {
        return <article key={user.id} className={styles.user}>
            {user.photos.small ? <img src={user.photos.small} alt="user avatar" className={styles.userAvatar}/> :
                <SvgIcon width='48' height='48' Icon={UserIcon}/>}
            <div className={styles.userInfo}>
                <p className={styles.userName}>
                    {user.name}
                </p>
                <p className={styles.userStatus}>
                    {user.status}
                </p>
            </div>
            <div className={styles.userFollowToggle} title={user.followed ? 'unfollow' : 'follow'}>
                {user.followed ?
                    <SvgIcon Icon={UserFollowed} onClick={() => unFollowHandle(user.id)}/> :
                    <SvgIcon Icon={UserFollow} onClick={() => followHandle(user.id)}/>}
            </div>
        </article>
    })
}