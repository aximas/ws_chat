import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {SuspenseComponent} from './core/utils/Suspense';
import {Menu} from './pages/Menu/Menu';
import {Header} from './pages/Header/Header';
import {useAppSelector} from './core/utils/hooks/useAppDispatch';
import {Navigate} from 'react-router';
import {Alert} from './components/MainComponents/Alert/Alert';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));
const Login = React.lazy(() => import('./pages/Login/Login'));

function App() {
    const [isLogged] = useAppSelector(({auth}) => [auth.isLogged]);

    let _redirectPage = isLogged ? '/' : '/login';

    return (
        <div className="wrapper">
            <Alert />
            <header className="header">
                <Header/>
            </header>
            <aside className="sidebar">
                <Menu/>
            </aside>
            <main className="main">
                <Routes>
                    {isLogged ? (<>
                        <Route path="/" element={<SuspenseComponent><Home/></SuspenseComponent>}/>
                        <Route path="/chat" element={<SuspenseComponent><ChatPage/></SuspenseComponent>}/>
                    </>) : <Route path="/login" element={<SuspenseComponent><Login/></SuspenseComponent>}/>}
                    <Route path="*" element={<Navigate to={_redirectPage} replace/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
