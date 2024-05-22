
// import './scss/components/_all.scss'
import './scss/app.scss'
import Header from './components/Header'
import React,{ useEffect, useState, createContext } from 'react';
import NotFound from './pages/NotFound';
import BrowserRouter, { Routes, Route }  from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'


// import { useSelector, useDispatch } from 'react-redux'//redux useSelector отыечает за вытаскивания данных
// import { decrement, increment, test } from './redux/slices/filterSlise';  //redux

export const SearchContext = React.createContext('') //создание контекста



function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  // const count = useSelector((state) => state.counter.count) //это хук, который позволяет извлекать данные из состояния хранилища Redux, используя селектор-функцию.
  // const dispatch = useDispatch()// это хук, который возвращает ссылку на функцию dispatch из хранилища Redux. Эту ссылку можно использовать для отправки действий, чтобы обновить состояние.
  // const count2 = useSelector((value) => value.counter.value)
  return (
    <div class="wrapper">
       
      <SearchContext.Provider value={{searchValue, setSearchValue}}>
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
      </SearchContext.Provider>
      
    </div>
  );
}

export default App;
