import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/messages" element={<ChatPage />}/>
            </Routes>
        </div>
    );
}

export default App;
