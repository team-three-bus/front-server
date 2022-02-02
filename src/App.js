import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyLike from 'Pages/MyLike';
import Category from 'Pages/Category';
import Search from 'Pages/Search';
import SearchResult from 'Pages/SearchResult';

import Login from 'Pages/Login';
import Oauth from 'Pages/Oauth';
import MyPage from 'Pages/MyPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/mylike' element={<MyLike />} />
          <Route path='/category' element={<Category />} />
          <Route path='/search' element={<Search />} />
          <Route path='/searchresult' element={<SearchResult />} />
          <Route path='/login' element={<Login />} />
          <Route path='/oauth' element={<Oauth />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
