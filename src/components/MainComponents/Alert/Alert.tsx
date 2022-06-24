import cn from 'classnames';
import parse from 'html-react-parser';
import styles from './Alert.module.scss';
import {AlertProps} from './Alert.props';
import {useAppDispatch, useAppSelector} from '../../../core/utils/hooks/useAppDispatch';
import {removeAlertAction} from '../../../core/store/alert/alert.slice';

export const Alert = ({className}: AlertProps) => {

    const [alert] = useAppSelector(({alert}) => [alert])
    const dispatch = useAppDispatch();

    const handleClick = (id: string) => () => {
        dispatch(removeAlertAction(id));
    }

    const renderNotifications = () => {
        return alert.map(item => (
            <div key={item.id} className={cn(styles.alert, className, styles[item.type], {[styles.active]: item.id})}
                 aria-live="polite"
                 aria-atomic="true">
                <p className={styles.content}>{parse(item.text)} 👋</p>
                {item.isSubmit && (<button onClick={handleClick(item.id)} className={styles.alertButton}>
                    X
                </button>)}
            </div>
        ))
    }

    return <div className={cn(styles.wrapper, {[styles.active]: alert.length})}>
        {renderNotifications()}
    </div>
}