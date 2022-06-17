import {Link} from 'react-router-dom';

export const Menu = () => {
    return         <nav>
        <ul>
            <li>
                <Link to="/messages">Messages</Link>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
}