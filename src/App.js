import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
          <Route Component={Dialogs}/>
          <Route Component={Profile}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
