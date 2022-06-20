import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {SuspenseComponent} from './core/utils/Suspense';
import {Menu} from './pages/Menu/Menu';
import {Header} from './pages/Header/Header';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));
const Login = React.lazy(() => import('./pages/Login/Login'));

function App() {
    return (
        <div className="wrapper">
            <header className='header'>
                <Header />
            </header>
            <aside className="sidebar">
                <Menu/>
            </aside>
            <main className="main">
                <Routes>
                    <Route path="/" element={<SuspenseComponent><Home/></SuspenseComponent>}/>
                    <Route path="/chat" element={<SuspenseComponent><ChatPage/></SuspenseComponent>}/>
                    <Route path="/login" element={<SuspenseComponent><Login/></SuspenseComponent>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
