import {useMemo} from 'react';

export const usePagination = ({
                                  totalCount,
                                  pageSize,
                                  currentPage
                              }: { totalCount: number, pageSize: number, currentPage: number }) => {

    useMemo(() => {
        const pages = Math.ceil(totalCount / pageSize);

        console.log('pages', pages);

    }, [totalCount, pageSize, currentPage]);

    return [];
}