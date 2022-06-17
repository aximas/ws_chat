import React, {FC, SuspenseProps, Suspense as SuspenseChanged} from 'react';

export const SuspenseComponent: FC<SuspenseProps> = ({children}) => {
    return (<SuspenseChanged fallback={<div>Загрузка...</div>}>
        {children}
    </SuspenseChanged>)
};