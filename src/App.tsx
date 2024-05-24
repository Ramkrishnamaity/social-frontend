import React, { useCallback, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './App/View/Auth/Login';
import Signup from './App/View/Auth/Signup';
import Layout from './App/Layout';
import RoutesList from './App/Route';
import { RoutesData } from './App/lib/DataSet/Global';
import { Logout } from './App/View/Auth/Logout';
import { CheckingToken } from './App/lib/LocalStorage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { setClientLogin } from './App/Store/Client';
import { useDispatch } from 'react-redux';

// import Login from './App/View/Auth/Login';
import MainLayout from './App/Layout/MainLayout';
import HomeFont from './App/View/Font/Home/Index';
import AboutFont from './App/View/Font/About/Index';
import ContactFont from './App/View/Font/Contact/Index';
import ApiDoc from './App/View/ApiDoc';
import ProductSingelScreen from './App/View/Ecommerce/Product/ProductSingelScreen';
// import SignUp from './App/View/Auth/Signup';



type Props = {

}

const App: React.FC<Props> = () => {

  const RouteCreate = (routeData: RoutesData[]): any => {
    return (
      <>
        {
          routeData.map((item, index) => {
            if (item.children.length > 0) {
              return (
                <Route path={item.path} element={item.element} key={index}>
                  {RouteCreate(item.children)}
                </Route>
              )
            }
            return (<Route path={item.path} element={item.element} key={index} />)
          })
        }
      </>
    )
  }


  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp />} /> */}
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<HomeFont />} />
          <Route path='/about' element={<AboutFont />} />
          <Route path='/contact' element={<ContactFont />} />
          <Route path='api-doc' element={<ApiDoc />} />
        </Route>


        <Route path='auth' element={<AuthRoute />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='logout' element={<Logout />} />
        </Route>

        <Route path='dashboad' element={<Layout />}>
          {RouteCreate(RoutesList)}
          <Route path='ecommerce/product/:id' element={<ProductSingelScreen />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

const AuthRoute: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const chkAuth = useCallback(() => {
    CheckingToken()
      .then((data) => {
        if (data?.token) {
          dispatch(setClientLogin(data))
          navigate("/")
        }
      })
  }, [navigate, dispatch])

  useEffect(() => {
    chkAuth();
  }, [chkAuth])



  return (
    <Outlet />
  )
}

export default App;
