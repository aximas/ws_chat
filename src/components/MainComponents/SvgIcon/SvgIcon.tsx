import cn from 'classnames';

import styles from './SvgIcon.module.scss';
import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const SvgIcon: React.FC<SvgProps> = ({Icon, className, ...props}) => {
    return <Icon width='24' height='24' className={cn(styles.icon, className)} {...props}/>
}