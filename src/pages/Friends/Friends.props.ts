export type Friend = {
    id: number,
    name: string,
    status: string | null,
    photos: {
        small: string,
        large: string
    },
    followed: boolean
}

export type FriendData = {
    items: Friend[],
    totalCount: number,
}