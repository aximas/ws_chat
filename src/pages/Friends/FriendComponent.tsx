import {Friend} from "./Friends.props";
import React from "react";
import styles from './Friends.module.scss';
import {ReactComponent as UserIcon} from "./../../assets/svg/user-profile.svg";
import {SvgIcon} from "../../components/MainComponents/SvgIcon/SvgIcon";
import {ReactComponent as UserFollowed} from '../../assets/svg/user-following-svgrepo-com.svg';
import {ReactComponent as UserFollow} from './../../assets/svg/user-follow-svgrepo-com.svg';


export const FriendComponent: React.FC<Friend[] | any> = ({users}) => {
    return users.map(user => {
        return <article key={user.id} className={styles.user}>
            {user.photos.small ? <img src={user.photos.small} alt="user avatar" className={styles.userAvatar}/> :
                <SvgIcon Icon={UserIcon}/>}
            <div className={styles.userInfo}>
                <p className={styles.userName}>
                    {user.name}
                </p>
                <p className={styles.userStatus}>
                    {user.status}
                </p>
            </div>
            <div className={styles.userFollowToggle} title={user.followed ? 'unfollow' : 'follow'}>
                {user.followed ? <SvgIcon Icon={UserFollowed}/> : <SvgIcon Icon={UserFollow}/>}
            </div>
        </article>
    })
}