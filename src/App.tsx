import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {SuspenseComponent} from './core/utils/Suspense';
import {MenuComponent} from './pages/Menu/Menu';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));
const Login = React.lazy(() => import('./pages/Login/Login'));

function App() {
    return (
        <div className="wrapper">
            <aside className="sidebar">
                <MenuComponent/>
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
