import React from 'react';
import '../scss/app.scss';
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock';
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import ReactPaginate from 'react-paginate';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux'; //позволяет извлекать данные из redux хранилища
import { setCategoryId, sort } from '../redux/slices/filterSlise';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [isCategories, setIsCategories] = useState(0);
  const skeletons = [...new Array(6)].map((e, i) => <Skeleton key={i} />);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  //redux
  const { categoryId, sort } = useSelector((state) => state.filter); //Он позволяет вам извлекать данные из Redux store
  const dispatch = useDispatch(); //Он позволяет вам отправлять действия (actions) в Redux store
  const setIsCategories = (i) => {
    dispatch(setCategoryId(i));
  };
  const sortType = sort.sortProperty;

  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? categoryId : '';
    const sort = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'asc' : 'desc';

    axios
      .get(
        `https://65528ae45c69a779032a28f4.mockapi.io/items?page=${currentPage}&limit=4&category=${category}&sortBy=${sort}&order=${order}
    `,
      )
      .then((res) => {
        console.log(res);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  //поиск ручн.
  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div class="content__top">
        <Categories value={categoryId} onClickCategory={(index) => setIsCategories(index)} />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onPageChange={(numbPage) => setCurrentPage(numbPage)} />
    </>
  );
};
export default Home;
