import {Link} from 'react-router-dom';

const Home = () => {
    return <div>
        This is home page
        <nav>
            <ul>
                <li>
                    <Link to="/messages">Messages</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Home;