import {UserComponent} from './UserComponent';
import {useAppDispatch, useAppSelector} from "../../core/utils/hooks/useAppDispatch";
import {usersThunk} from "../../core/store/users/users.thunks";
import {useEffect, useState} from "react";
import styles from './Users.module.scss';

const Users = ({isOnlyFriends = false}: { isOnlyFriends?: boolean }) => {

    const [users, totalCount] = useAppSelector(({users}) => [users.items, users.totalCount]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersThunk({queryParams: isOnlyFriends ? 'friend=true' : ''}));
    }, []);

    return <div className={styles.users}>
        <UserComponent users={users} />
    </div>
};

export default Users;