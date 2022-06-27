export type User = {
    id: number,
    name: string,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    followed: boolean
}

export type UserData = {
    items: User[],
    totalCount: number,
}