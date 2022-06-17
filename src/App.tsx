import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {SuspenseComponent} from './core/utils/Suspense';
import {Menu} from './pages/Menu/Menu';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

function App() {
    return (
        <div className="wrapper">
            <Menu/>
            <Routes>
                <Route path="/" element={<SuspenseComponent><Home/></SuspenseComponent>}/>
                <Route path="/messages" element={<SuspenseComponent><ChatPage/></SuspenseComponent>}/>
            </Routes>
        </div>
    );
}

export default App;
