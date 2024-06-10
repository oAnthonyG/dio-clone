import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/home';
import { Login } from './Pages/login';
import { Feed } from './Pages/feed';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/feed' element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
