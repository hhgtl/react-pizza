import Categories from '../components/Categories/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaBlockSkeleton from '../components/PizzaBlock/PizzaBlockSkeleton';
import Sort from '../components/Sort/Sort';

import { useEffect, useState } from 'react';

const Home = () => {
  const [pizzasData, setPizzasData] = useState([]);
  const [isLoadingPizza, setIsLoadingPizza] = useState(true);
  useEffect(() => {
    fetch('https://666438f6932baf9032aa655c.mockapi.io/react-pizza')
      .then((res) => res.json())
      .then((data) => {
        setPizzasData(data);
        setIsLoadingPizza(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoadingPizza
          ? [...new Array(6)].map((_, i) => <PizzaBlockSkeleton key={i} />)
          : pizzasData.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
