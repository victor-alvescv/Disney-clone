import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router> 
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
