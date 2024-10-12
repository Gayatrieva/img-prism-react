 import { BrowserRouter,Routes,Route} from 'react-router-dom'
 import Home from './pages/Home'
import Login from './pages/Login'

import SellerDashboard from './pages/SellerDashboard'
import BuyerDashboard from './pages/BuyerDashboard'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
export default function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/SellerDashboard' element={<SellerDashboard/>}/>
      <Route path='/buyerDashboard' element={<BuyerDashboard/>}/>
    </Routes>
    {/* Add Your Footer here */}
    </BrowserRouter></>
  )
} 