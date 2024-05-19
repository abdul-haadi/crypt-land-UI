import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.js';
import NewsifyPage from './pages/Newsify/NewsifyPage.js';
import StartPage from './pages/StartPage/StartPage.js'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage.js';
import PlanPage from './pages/PlansPage/PlanPage.js';
import ContactPage from './pages/ContactPage/ContactPage.js';
import Navigation from './components/ui/startpage/Navigation/navigation.js';
import Footer from './components/ui/startpage/footer/footer.js';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        {/* <Route path='/' element={<HomePage/>}></Route> */}
        {/* <Route path='/newsify' element={<NewsifyPage/>}></Route> */}
        <Route path='/' element={<StartPage/>}></Route>
        <Route path='/portfolio' element={<PortfolioPage/>}></Route>
        <Route path='/plan' element={<PlanPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
