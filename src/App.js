// import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-tailwind/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TestComponent from './root/test';
import Dashboard from './root/pages/Dashboard';
import Bonus from './root/pages/Bonus';
import Tournaments from './root/pages/Tournaments';
import Rules from './root/pages/Rules';
import StickyLeftSideBar from './root/subParts/StickyLeftSideBar';
import LoginModal from './root/pages/LoginModal';

function App() {
  return (
    <div className="App bg-black">
      <Router>
      <StickyLeftSideBar />
        <Routes>
          <Route path="/" Component={TestComponent} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/bonus" Component={Bonus} />
          <Route path="/tournaments" Component={Tournaments} />
          <Route path='/rules' Component={Rules} />
          <Route path='/login' Component={LoginModal} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
