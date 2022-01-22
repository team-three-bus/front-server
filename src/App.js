import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from 'Pages/Login';
import Oauth from 'Pages/Oauth';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/oauth' element={<Oauth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
