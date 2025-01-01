import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Component/Home/HomePage'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import CartPage from './Component/Cart/CartPage'
import ProfilePage from './Component/Profile/ProfilePage'
import WishlistPage from './Component/Wishlist/WishlistPage'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/UserSlice'
import { useEffect } from 'react'
import Context from './Context/Context'



function App() {

  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user-details`, {
      method: "GET",
      credentials: "include",
    })

    const dataApi = await dataResponse?.json();
    console.log("working")
    if (dataApi) {
      console.log(dataApi);
      dispatch(setUserDetails(dataApi?.data));
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, []);

  return (
    <>

      <Context.Provider
        value={{ fetchUserDetails }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/cartPage' element={<CartPage />}></Route>
            <Route path='/wishlistPage' element={<WishlistPage />}></Route>
            <Route path='/profilePage' element={<ProfilePage />}></Route>
            
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>


    </>
  )
}

export default App
