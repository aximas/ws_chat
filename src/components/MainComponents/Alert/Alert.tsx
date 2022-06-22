import cn from 'classnames';
import styles from './Alert.module.scss';
import {alertProps, AlertProps} from './Alert.props';
import {Button} from '@mui/material';

export const Alert = ({className}: AlertProps) => {

    const alert: alertProps[] = [{
        id: '23',
        text: 'Heye it is alert',
        type: 'info',
        isSubmit: false
    }];

    const handleClick = (id: string) => () => {

    }

    const renderNotifications = () => {
        return alert.map(item => (
            <div key={item.id} className={cn(styles.alert, className, styles[item.type], {[styles.active]: item.id})}
                 aria-live="polite"
                 aria-atomic="true">
                <p className={styles.content}>{item.text}</p>
                {item.isSubmit && (<Button onClick={handleClick(item.id)}>
                    X
                </Button>)}
            </div>
        ))
    }

    return <div className={cn(styles.wrapper, {[styles.active]: alert.length})}>
        {renderNotifications()}
    </div>
}