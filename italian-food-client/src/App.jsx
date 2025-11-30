import { useState } from 'react'
import './App.css'
import Color from './component/Color'
import Home from './component/Home'
import Menu from './component/Menu'
import Event from './component/Event'
import BookTable from './component/BookTable'
import Footer from './component/Footer'
import Login from './component/Login'
import Food from './component/Food'
import Cart from './component/Cart'
import { CartProvider } from './component/CartContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <div className="App">
              <Color />
              <Home />
              <Menu />
              <Event />
              <BookTable />
              <Footer />
            </div>
          } />
          <Route path="/food" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer />
      </Router>
    </CartProvider>
  )
}

export default App
