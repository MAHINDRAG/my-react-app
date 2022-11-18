import React from 'react'
import './Menu.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Home/'
import About from '../About'
import Contact from '../Contact'


const Menu = () => {
  const [menuItem, setMenuItem] = React.useState('home');
  const fnMenuClick = (eve) => {
    eve.stopPropagation();
    console.log(eve);
    console.log(eve.target)
    const { id, nodeName } = eve.target;
    if (nodeName === 'A') {
      setMenuItem(id);
    }
  }
  return (
    <div>
      <div className='menu text-end' onClick={fnMenuClick}>
        <a className={menuItem === 'home' && 'menuActive'} id="home" href='#/home'>Home</a>
        <a className={menuItem === 'about' && 'menuActive'} id="about" href='#/about'>About</a>
        <a className={menuItem === 'contact' && 'menuActive'} id="contact" href='#/contact'>Contact</a>
      </div>
      <HashRouter>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Navigate to='/home' />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default Menu;