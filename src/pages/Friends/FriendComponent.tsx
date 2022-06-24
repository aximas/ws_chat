export const FriendComponent = ({friends}) => {
    return friends.map(friend => {
        return <article key={friend.id}>
            {friend.name}
        </article>
    })
}