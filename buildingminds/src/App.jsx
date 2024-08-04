import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Introduction from './components/Introduction';
import Categories from './components/Categories';
import Resources from './components/Resources';
import About from './components/About';
import Mission from './components/Mission';
import ContactUs from './components/ContactUs';
import './App.css'

function App() {

  return (
    <>
      <Router basename="/buildingminds">
          <Routes>
            <Route path="/" element={<Home />} />

{/*            <Route path="/introduction" element={<Introduction />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<ContactUs />} />*/}
          </Routes>
      </Router>
    </>
  )
}

export default App
