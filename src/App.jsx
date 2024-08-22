import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'
import Home from './components/Home/Home'
import Navbar from './components/navbar/Navbar'
import Projects from './components/Projects/Projects'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
