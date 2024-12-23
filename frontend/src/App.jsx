import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Component/Home/HomePage'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import CartPage from './Component/Cart/CartPage'





function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/cartPage' element={<CartPage />}></Route>


        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
