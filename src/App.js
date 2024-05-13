import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js';
import NewsifyPage from './pages/Newsify/NewsifyPage.js';
import StartPage from './pages/StartPage/StartPage.js'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/newsify' element={<NewsifyPage/>}></Route>
        <Route path='/start' element={<StartPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
