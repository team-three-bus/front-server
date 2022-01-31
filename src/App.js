import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyLike from 'Pages/MyLike';
import Search from 'Pages/Search';
import SearchResult from 'Pages/SearchResult';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/mylike' element={<MyLike />} />
          <Route path='/search' element={<Search />} />
          <Route path='/searchresult' element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
