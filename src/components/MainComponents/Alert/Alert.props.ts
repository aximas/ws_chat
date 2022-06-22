import {DetailedHTMLProps, HTMLAttributes} from 'react';

export type AlertProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,
    HTMLDivElement>;

export type alertProps = {
    id: string;
    text: string;
    type: 'info' | 'error';
    isSubmit?: boolean;
}