import React from 'react';
import '../scss/app.scss';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock';
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Skeleton from '../components/pizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCategories, setIsCategories] = useState(0);
  const [sortType, setSortType] = useState({ name: 'попопулярности', sortProperty: 'rating' });
  // console.log(sortType);
  console.log(isCategories);

  useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    fetch(
      `https://65528ae45c69a779032a28f4.mockapi.io/items?${
        isCategories > 0 ? `category=${isCategories}` : ''
      }&sortBy=${sortType.sortProperty}&orderBy=desc
   `,
    )
      .then((e) => e.json())
      .then((e) => {
        setItems(e);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [isCategories, sortType]);

  return (
    <>
      <div class="content__top">
        <Categories onClickCategory={(index) => setIsCategories(index)} value={isCategories} />
        <Sort idSort={sortType} onClickSort={(obj) => setSortType(obj)} />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {isLoading
          ? [...new Array(6)].map((_) => <Skeleton />)
          : items.map((obj) => <PizzaBlock {...obj} key={obj.id} />)}
      </div>
    </>
  );
};
export default Home;
