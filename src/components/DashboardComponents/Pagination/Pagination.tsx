import styles from './Pagination.module.scss';
import cn from 'classnames';
import {SvgIcon} from '../../MainComponents/SvgIcon/SvgIcon';
import {ReactComponent as PrevIcon} from './../../../assets/svg/previous-back-svgrepo-com.svg';
import {ReactComponent as NextIcon} from './../../../assets/svg/next-svgrepo-com.svg';
import {usePagination} from '../../../core/utils/hooks/usePagination';

export const Pagination = ({
                               totalCount,
                               pageSize = 10,
                               currentPage,
                               onPage
                           }: { totalCount: number, pageSize: number, currentPage: number, onPage: (page: number) => void }) => {

    const pagination = usePagination({totalCount, pageSize, currentPage})

    console.log('pagination', pagination);

    return (<nav className={styles.pagination}>
        <button className={cn(styles.arrowBtn, styles.prevBtn)}>
            <SvgIcon Icon={PrevIcon}/>
        </button>
        <button className={cn(styles.arrowBtn, styles.prevBtn)}>
            <SvgIcon Icon={NextIcon}/>
        </button>
    </nav>)
}