import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Component/Home/HomePage'
import Navbar from './Component/Navbar'
import CartPage from './Component/Cart/CartPage'
import ProfilePage from './Component/Profile/ProfilePage'
import WishlistPage from './Component/Wishlist/WishlistPage'
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/UserSlice'
import { useEffect } from 'react'
import Context from './Context/Context'
import SearchProductsPage from './Component/SearchProducts/SearchProductsPage'
import ShowProductPage from './Component/ShowProduct/ShowProductPage'
import SettingPage from './Component/Setting/SettingPage'
import NotificationPage from './Component/Notification/NotificationPage'
import OrderPage from './Component/Order/OrderPage'
import PlaceOrderPage from './Component/PlaceOrder/PlaceOrderPage'



function App() {

  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user-details`, {
      method: "GET",
      credentials: 'include',
    })

    const dataApi = await dataResponse?.json();
    if (dataApi) {
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
            <Route path='/settingPage' element={<SettingPage />}></Route>
            <Route path='/notificationPage' element={<NotificationPage />}></Route>
            <Route path='/wishlistPage' element={<WishlistPage />}></Route>
            <Route path='/orderPage' element={<OrderPage />}></Route>
            <Route path='/profilePage' element={<ProfilePage />}></Route>
            <Route path='/search-products' element={<SearchProductsPage />}></Route>
            <Route path='/show-product/:id' element={<ShowProductPage />}></Route>
            <Route path='/products/:id/buynow' element={<PlaceOrderPage />}></Route>
            
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </Context.Provider>


    </>
  )
}

export default App
