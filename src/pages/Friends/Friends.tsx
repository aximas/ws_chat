import {FriendComponent} from './FriendComponent';
import {FriendData} from './Friends.props';
import {useAppDispatch, useAppSelector} from "../../core/utils/hooks/useAppDispatch";
import {usersThunk} from "../../core/store/users/users.thunks";
import {useEffect} from "react";
import styles from './Friends.module.scss';

export const Friends = () => {
    const [users, totalCount] = useAppSelector(({users}) => [users.items, users.totalCount]);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(usersThunk({queryParams: ''}));
    }, []);

    return <div className={styles.users}>
        <FriendComponent users={users}/>
    </div>
}