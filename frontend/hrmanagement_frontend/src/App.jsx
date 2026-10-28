import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact' 
import Adminlogin from './pages/adminlogin'
import Adminhome from './pages/adminhome'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/register' 
import login_page from './pages/login_page'  
function App() {
  return (
    <div>
    <Header />
    <Routes>
    <Route path='/' element={<Home></Home>}></Route> 
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/adminlogin' element={<Adminlogin></Adminlogin>}></Route>
    <Route path='/adminhome' element={<Adminhome></Adminhome>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/Login' element={<Login></Login>}></Route>   
    </Routes>
    <Footer />
    </div>
  )
}
export default App

