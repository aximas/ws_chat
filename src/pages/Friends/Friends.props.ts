export type Friend = {
    id: number,
    name: string,
    status: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    followed: boolean
}

export type FriendData = {
    items: Friend[],
    totalCount: number,
}