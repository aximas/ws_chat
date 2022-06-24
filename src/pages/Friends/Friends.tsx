import {FriendComponent} from './FriendComponent';
import {FriendData} from './Friends.props';

const friends: FriendData[] = [{
    items: [
        {
            'name': 'Shubert',
            'id': 1,
            'photos': {
                'small': null,
                'large': null
            },
            'status': null,
            'followed': false
        },
        {
            'name': 'Hacker',
            'id': 2,
            'photos': {
                'small': null,
                'large': null
            },
            'status': null,
            'followed': false
        }
    ],
    totalCount: 30,
}]

export const Friends = () => {
    return <div>
        <FriendComponent friends={friends[0].items}/>
    </div>
}