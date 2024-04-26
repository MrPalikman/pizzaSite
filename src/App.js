
// import './scss/components/_all.scss'
import './scss/app.scss'
import Header from './components/Header'
import { useEffect, useState } from 'react';
import NotFound from './pages/NotFound';
import BrowserRouter, { Routes, Route }  from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://65528ae45c69a779032a28f4.mockapi.io/items').then((e) => e.json())
      .then((e) => {
        setItems(e);
        setIsLoading(false)
      })
  },
    []
  )
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Routes>
          {/* <Home/> */}
          {/* <NotFound/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
